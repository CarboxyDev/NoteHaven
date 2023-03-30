import { prisma } from "../../server/db/client";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    console.log("[POST] /api/login");
    try {
      if (!req.body.email || !req.body.password) {
        res.status(400).json({ message: "Missing email or password" });
        return;
      }
      // check email and password against database
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
      }
      if (user.password !== req.body.password) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
      }

      // delete any existing sessions
      await prisma.session.deleteMany({
        where: {
          userId: user.id,
        },
      });

      // create a session
      const session = await prisma.session.create({
        data: {
          userId: user.id,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          handle: user.email,
        },
      });

      if (session) {
        // set cookie
        res.setHeader(
          "Set-Cookie",
          `session=${session.id}; path=/; expires=${new Date(
            Date.now() + 1000 * 60 * 60 * 24 * 7
          ).toUTCString()}`
        );
      }

      res
        .status(200)
        .json({ message: "Successfully logged in", loginAs: "teacher" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error logging in" });
    }
  }
}
