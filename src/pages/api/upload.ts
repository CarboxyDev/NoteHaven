import multer from "multer";
import { promisify } from "util";
import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";
import fs from "fs";
import { prisma } from "../../server/db/client";

function getAccessToken() {
  return process.env.WEB3STORAGE_TOKEN!;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

const upload = promisify(multer({ dest: "/tmp" }).single("file"));
const client = makeStorageClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      await upload(req, res);
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      if (!req.body.title || !req.body.description) {
        return res.status(400).json({
          message: "Title and description are required",
        });
      }
      if (req.body.title.length < 10 || req.body.description.length < 10) {
        return res.status(400).json({
          message: "Title and description must be at least 10 characters long",
        });
      }
      const file = req.file;
      const buffer = fs.readFileSync(file.destination + "/" + file.filename);

      const files = [new File([buffer], file.originalname)];

      const cid = await client.put(files);
      console.log("stored files with cid:", cid);

      const session = await prisma.session.findUnique({
        where: {
          id: req.cookies.session,
        },
      });

      if (!session || session == undefined) {
        throw new Error("Session not found");
      }

      const user = await prisma.user.findUnique({
        where: {
          id: session.userId,
        },
      });

      if (!user || user == undefined) {
        throw new Error("User not found");
      }

      console.log(user);

      const note = await prisma.note.create({
        data: {
          title: req.body.title,
          cid: cid,
          originalFileName: file.originalname,
          description: req.body.description,
          authorId: user.id,
          rating: 5,
        },
      });

      res
        .status(200)
        .json({ message: "Note created successfully", cid: cid, note: note });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error uploading note" });
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
