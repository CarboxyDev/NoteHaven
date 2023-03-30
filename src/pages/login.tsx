import { type NextPage } from "next";
import Head from "next/head";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

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
          <div className="mt-32 flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
