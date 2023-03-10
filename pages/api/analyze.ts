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

  const backendDomain = process.env.BACKEND_DOMAIN as string;
  const apiUrl = `${backendDomain}/api/v1/readpilot/analyze_url`;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Token": `${process.env.PIPE3_API_KEY}`,
    },
    body: JSON.stringify({
      url: url,
    }),
  });

  if (res.status != 200) {
    console.log(`[analyze.ts] Pipe3 API error: ${res}`);
    return new Response(JSON.stringify({ msg: "Pipe3 API error", data: [] }), {
      status: 500,
    });
  }

  const respJson = await res.json();
  const data = respJson.data;

  return new Response(JSON.stringify({ data: data }));
};

export default handler;
