import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  const { url } = (await req.json()) as { url: string };

  if (!url) {
    return new Response(JSON.stringify({ msg: "URL is empty", data: [] }), {
      status: 400,
    });
  }

  const prompt = `
  Generate a list of thought provoking discussion questions about the URL, and return the answers of these questions with the evidence.

  Please generate a JSON list object with the following properties: q and a. q and a should be string. q is the question. a is the answer.

  The URL is: ${url}
  `;

  const payload = {
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 500,
    stream: false,
    n: 1,
  };

  const res = await fetch("https://api.openai.com/v1/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ msg: "OpenAI API error", data: [] }), {
      status: 500,
    });
  }

  const { choices } = await res.json();
  const { text } = choices[0];
  const rawData = text.trimStart().replace(/^Output: /, "");
  console.log(rawData);
  const results = JSON.parse(rawData);

  return new Response(JSON.stringify({ data: results }));
};

export default handler;
