import React from "react";
import Cookies from "cookies";
import { prisma } from "../../server/db/client";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Divider from "../../components/Divider";
import Filler from "../../components/Filler";
import Footer from "../../components/Footer";
import Link from "next/link";
import Button from "../../components/Button";

interface TeacherIndexProps {
  session: any;
  user: any;
  notes: any;
}

export async function getServerSideProps(context: any) {
  const cookies = new Cookies(context.req, context.res);
  const session = cookies.get("session");
  let user;
  let notes;

  if (!session || session == undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  } else if (session) {
    console.log("[SSR] /teacher/index.tsx: session: ", session);
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

        notes = await prisma.note.findMany({
          where: {
            authorId: user.id,
          },
        });

        if (!notes) {
          throw new Error("Invalid notes");
        }
        console.log(notes);
      }
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
        props: {},
      };
    }
  }

  return {
    props: {
      session: session,
      user: JSON.parse(JSON.stringify(user)),
      notes: JSON.parse(JSON.stringify(notes)),
    },
  };
}

export default function TeacherIndex(props: TeacherIndexProps) {
  const session = props.session;
  const user = props.user;
  const notes = props.notes;

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
          <Divider />
          <Filler height="h-16" />
          <div>
            <h2
              id="welcome"
              className="mb-10 mr-auto font-secondary text-4xl font-semibold text-gray-700"
            >
              Welcome back, {user.name}
            </h2>
            <div className="mb-12 ">
              <span>
                You have <span>{notes.length}</span>{" "}
                {notes.length == 1 ? "note" : "notes"}
              </span>
            </div>
            <Link href={"/teacher/create"}>
              <Button variant="default" size="lg">
                Create a note
              </Button>
            </Link>
          </div>
          <Filler height="h-48" />
          <Footer />
        </div>
      </main>
    </>
  );
}
