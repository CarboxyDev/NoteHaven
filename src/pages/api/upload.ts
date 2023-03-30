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

const upload = promisify(multer({ dest: "./public/uploads" }).single("file"));
const client = makeStorageClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      await upload(req, res);
      const file = req.file;
      const buffer = fs.readFileSync(file.destination + "/" + file.filename);

      const files = [new File([buffer], file.originalname)];

      const cid = await client.put(files);
      console.log("stored files with cid:", cid);

      const note = await prisma.note.create({
        data: {
          title: "Testing",
          cid: cid,
          originalFileName: file.originalname,
          description: "This is a test",
          authorId: "clfv5xb410000sy63zsppszjo",
          rating: 4.6,
        },
      });

      res
        .status(200)
        .json({ message: "File uploaded successfully", cid: cid, note: note });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error uploading file" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
