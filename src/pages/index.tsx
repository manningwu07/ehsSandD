import Head from "next/head";
import LandingPage from "./home";
export default function Home() {
  return (
    <>
      <Head>
        <title>AstroGaels</title>
        <meta
          name="description"
          content="Dublin High School Astronomy Club"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <LandingPage />
    </>
  );
}
