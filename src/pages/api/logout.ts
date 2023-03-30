import { prisma } from "../../server/db/client";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    console.log("[GET] /api/logout");
    try {
      await prisma.session.deleteMany({
        where: {
          id: req.cookies.session,
        },
      });
      res.setHeader(
        "Set-Cookie",
        `session=; path=/; expires=${new Date(
          Date.now() - 1000 * 60 * 60 * 24 * 7
        ).toUTCString()}`
      );

      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error logging in" });
    }
  }
}
