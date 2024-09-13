import Head from "next/head";
import LandingPage from "~/components/LandingPage";
export default function Home() {
  return (
    <>
      <Head>
        <title>Gemini Academy</title>
        <meta name="description" content="A program to introduce speech and debate to beginners." />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#110a1abe] to-[#030307]">
        <LandingPage />
      </main>
    </>
  );
}
