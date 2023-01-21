import type { NextRequest } from "next/server";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ msg: "Method is not allowed." }), {
      status: 405,
    });
  }

  const { url } = (await req.json()) as {
    url?: string;
  };

  if (!url) {
    return new Response(JSON.stringify({ msg: "Invalid request" }), {
      status: 400,
    });
  }

  const prompt = `Generate 5 questions based on the content of the link: ${url}`;

  const payload = {
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 200,
    stream: false,
  };

  const res = await fetch("https://api.openai.com/v1/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = res.body;

  return new Response(data, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};

export default handler;
