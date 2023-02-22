import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, LoadingDots, Twitter } from "@/components/shared/icons";

export default function Home() {
  const results = [
    {
      title: "Ask Startup Class",
      description:
        "This AI trained by the startup class of Y Combinator: How to Start a Startup. You can ask any questions related to starting a startup.",
    },
    {
      title: "Ask Read Pilot",
      description:
        "Input a link, and get a summary of the article. You can also ask questions about the article.",
    },
    {
      title: "Ask The Great CEO Within",
      description:
        "This AI trained by the book: The Great CEO Within. You can ask any questions related to the book.",
    },
    {
      title: "Ask Naval Ravikant",
      description:
        "This AI trained by all the tweets of Naval Ravikant. You can ask any questions related to life, business, and investing.",
    },
    {
      title: "Ask Elon Musk",
      description:
        "This AI trained by all the tweets of Elon Musk. It's an AI version of Elon Musk.",
    },
    {
      title: "Ask Tim Ferriss",
      description:
        "This AI trained by all the blogs, tweets, books of Tim Ferriss. You can ask any questions related to life, business, and investing.",
    },
  ];

  return (
    <Layout>
      <div>
        <motion.div
          className="flex w-full flex-col items-center justify-center px-5 xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            className="flex justify-between space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <a
              href="https://twitter.com/Tisoga/status/1619020457860268035"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            >
              <Twitter className="h-5 w-5 text-[#1d9bf0]" />
              <p className="text-sm font-semibold text-[#1d9bf0]">
                Introducing Copilot Hub
              </p>
            </a>
            <a
              href="https://github.com/forrestchang/readpilot"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-black bg-white px-7 py-2 text-black transition-colors hover:bg-black hover:text-white"
            >
              <Github className="h-5 w-5" />
              <p className="text-sm font-semibold">Star on GitHub</p>
            </a>
          </motion.div>

          <motion.h1
            className="mt-6 w-[1024px] text-center font-display text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              The AI Assistant Community
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Building the Future
              </span>
            </Balancer>
          </motion.h1>
          <motion.p
            className="mt-6 w-2/3 text-center text-gray-500 md:text-2xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              Copilot Hub is an AI-native platform where you can train and
              fine-tune your LLMs. Create a chatbot with your own data in
              minutes.
            </Balancer>
          </motion.p>

          <motion.div className="mt-8" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <button className="rounded-full border border-black bg-black p-1.5 px-4 text-lg text-white transition-all hover:bg-white hover:text-black sm:text-sm md:text-xl">
              Start Building →
            </button>
          </motion.div>

          <motion.p
            className="mt-20 w-2/3 text-center text-3xl font-bold text-gray-700"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Featured Copilots</Balancer>
          </motion.p>
        </motion.div>

        <div className="mt-10 grid max-h-screen w-full animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          {results.map(({ title, description }) => (
            <Card key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
