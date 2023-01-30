import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { UserProps } from "@/lib/get-user-server-side";
import { NextPage } from "next";

const Page: NextPage<UserProps> = ({ user }) => {
  const [url, setUrl] = useState("");
  const link = '/'
  useEffect(() => {
    if (user) {
      setUrl(link);
    }
  }, [link]);

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);
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
                Introducing Read Pilot
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
            className="mt-6 w-[1024px] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              Read Online Articles With
              <br />
              <span className="bg-co bg-gradient-to-r from-blue-500 via-green-600 to-indigo-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </Balancer>
          </motion.h1>
          <motion.p
            className="mt-6 text-center text-gray-500 md:text-2xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              Read Pilot analyzes online articles and generate Q&A cards for
              you.
            </Balancer>
          </motion.p>

            <motion.div
              className="mt-8"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-lg text-white transition-all hover:bg-white hover:text-black sm:text-sm md:text-xl"
                  onClick={() => signIn("whop")}
                >
                  Get Access →
                </button>
            </motion.div>
        </motion.div>

      </div>
    </Layout>
  );
};

export default Page;

export { default as getServerSideProps } from "@/lib/get-user-server-side";
