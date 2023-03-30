import { prisma } from "../../server/db/client";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const query = req.query;
      const count = query.count;
      let data;

      if (!count) {
        const notes = await prisma.note.findMany({});
        data = notes;
      } else if (count && typeof parseInt(count) === "number") {
        const notes = await prisma.note.findMany({
          take: parseInt(count),
        });
        data = notes;
      }

      res.status(200).json({
        message: "Notes fetched successfully",
        data: data,
        query: query,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching notes" });
    }
  }
}

export const config = {
  api: {},
};
