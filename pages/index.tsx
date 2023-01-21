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
    <div>
      <Head>
        <title>Read Pilot</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>

      <div id={"header"}>
        <h1>Read Pilot</h1>
        <h1>Follow on Twitter</h1>
      </div>
      <div id={"content"}>
        <input
          type={"url"}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={"Input a URL"}
        ></input>
        <button onClick={(e) => generateQACards(e)}>Summarize</button>
        <div id={"generated-cards"}>{generatedCards}</div>
      </div>
      <div id={"footer"}>
        <h1>Copyright 2023</h1>
      </div>
    </div>
  );
};

export default Home;
