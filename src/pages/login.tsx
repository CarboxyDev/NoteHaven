import Cookies from "cookies";
import { type NextPage } from "next";
import Head from "next/head";
import Divider from "../components/Divider";
import Filler from "../components/Filler";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import { prisma } from "../server/db/client";

export async function getServerSideProps(context: any) {
  const cookies = new Cookies(context.req, context.res);
  const session = cookies.get("session");
  let user;

  if (!session || session == undefined) {
    return {
      props: {},
    };
  } else if (session) {
    try {
      const checkSession = await prisma.session.findUnique({
        where: {
          id: session,
        },
      });
      if (!checkSession) {
        return {
          props: {},
        };
      } else if (checkSession) {
        user = await prisma.user.findUnique({
          where: {
            id: checkSession.userId,
          },
        });
        if (user) {
          return {
            props: {
              redirect: {
                permanent: false,
                destination: "/teacher",
              },
            },
          };
        }
      }
    } catch (error) {
      return {
        props: {},
      };
    }
  }

  return {
    props: {},
  };
}

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div id="app-container" className="px-4 sm:px-8 lg:px-20 xl:px-28">
          <Navbar active="login" />
          <Divider />
          <Filler height="h-24" />
          <div className="flex flex-row items-center justify-center gap-20">
            <div>
              <h2
                id="login"
                className="mr-auto font-secondary text-5xl font-semibold text-gray-700"
              >
                Login to teacher account
              </h2>
              <p className="mt-8 max-w-md text-gray-500">
                As of now, only teachers can own an account and that too on
                request. If you want to login to a dummy account, use the
                following credentials: <br />
                <br />
                <span className="font-semibold">
                  {" "}
                  email: johndoe@gmail.com, password: 123456
                </span>
              </p>
            </div>
            <LoginForm />
          </div>
          <Filler height="h-48" />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Login;
