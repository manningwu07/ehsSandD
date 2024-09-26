import Head from "next/head";
import LandingPage from "./home";
export default function Home() {
  return (
    <>
      <Head>
        <title>Gemini Academy</title>
        <meta
          name="description"
          content="A program to introduce speech and debate to teenagers."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <LandingPage />
    </>
  );
}
