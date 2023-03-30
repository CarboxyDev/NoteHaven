import { type NextPage } from "next";
import Head from "next/head";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>NoteHaven - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center">
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
