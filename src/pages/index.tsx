import Head from "next/head";
import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emerald Speech & Debate Club</title>
        <meta
          name="description"
          content="Emerald High School's Speech and Debate Club, empowering youth voices and fostering a culture of fair discourse."
        />
        <meta
          name="keywords"
          content="EHS, Emerald High School, Speech, Debate, Dublin CA, High School, Club, Emerald Speech & Debate Club"
        />
        <meta name="author" content="Emerald Speech & Debate Club, Manning Wu" />
        <meta
          name="google-site-verification"
          content="A6YrIHHiVDJIA8O5_fVIFMNVm8W7lxnVZd6TYIy5w4Q"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <LandingPage />
    </>
  );
}
