import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  const { url } = (await req.json()) as { url: string };

  if (!url) {
    return new Response(JSON.stringify({ msg: "URL is empty" }), {
      status: 400,
    });
  }

  const result = [
    {
      q: "What does it mean for a product to be horizontal?",
      a: "A horizontal product is one that can be used by people from all walks of life and not just those in a specific profession or field. ",
    },
    {
      q: "What advantages does a vertical product have over a horizontal product?",
      a: "Vertical products have an easier time finding customers because they can target a specific profession or field and know where to advertise and which conventions to attend. Additionally, vertical products have higher margins because their users are professionals who will be willing to pay for a solution to their problems.",
    },
    {
      q: "What did the author learn from visiting Excel customers?",
      a: "The author learned that most people were using Excel not for calculations but for creating tables. This helped him understand why Lotus Improv, which was designed for calculations, had failed. He realized that the great horizontal killer applications are actually just fancy data structures.",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return new Response(JSON.stringify({ data: result }));
};

export default handler;
