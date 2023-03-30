import React from "react";
import Cookies from "cookies";
import { prisma } from "../../server/db/client";
import Head from "next/head";
import Navbar from "../../components/Navbar";

interface TeacherIndexProps {
  session: any;
  user: any;
}

export async function getServerSideProps(context: any) {
  const cookies = new Cookies(context.req, context.res);
  const session = cookies.get("session");
  let user;

  if (!session) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
  } else if (session) {
    try {
      const checkSession = await prisma.session.findUnique({
        where: {
          id: session,
        },
      });
      if (!checkSession) {
        throw new Error("Invalid session");
      } else if (checkSession) {
        user = await prisma.user.findUnique({
          where: {
            id: checkSession.userId,
          },
        });
        if (!user) {
          throw new Error("Invalid user");
        }
      }
    } catch (error) {
      context.res.writeHead(302, { Location: "/login" });
      context.res.end();
    }
  }
  console.log("[SSR] /teacher/index.tsx: session: ", session);
  return {
    props: {
      session: session,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default function TeacherIndex(props: TeacherIndexProps) {
  const session = props.session;
  const user = props.user;

  return (
    <>
      <Head>
        <title>Teacher Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar
            active=""
            CTAButton={{
              text: "Logout",
              link: "/api/logout",
            }}
          />
          <div>{user && <span>{user.name}</span>}</div>
        </div>
      </main>
    </>
  );
}
