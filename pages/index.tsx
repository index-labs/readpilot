import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [generatedCards, setGeneratedCards] = useState<String>("");

  const generateQACards = async (e: any) => {
    e.preventDefault();
    setGeneratedCards("");
    setLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    }).then((res) => res.json());

    console.log("[/api/generate] response=", response);

    const text = response.choices[0].text;

    setGeneratedCards(text);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Read Pilot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="m mb-10 text-6xl font-bold">Welcome to Read Pilot</h1>

        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={"Input a URL from the internet"}
          className={
            "w-1/2 rounded-md border-2 border-solid border-indigo-600 p-2"
          }
        />

        <button
          className={
            "mt-5 rounded-md bg-indigo-500 p-2 text-white hover:bg-indigo-700"
          }
          onClick={(e) => generateQACards(e)}
        >
          Generate Q&A Cards &rarr;
        </button>

        <p className={"mt-10"}>{generatedCards}</p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
