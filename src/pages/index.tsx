import Head from "next/head";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>EHS Speech and Debate</title>
        <meta
          name="description"
          content="Emerald High School's Speech & Debate Club, established in 2023, is dedicated to empowering youth voices and fostering a culture of fairness, equity, and excellence in competitive debate."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <LandingPage />
    </>
  );
}
