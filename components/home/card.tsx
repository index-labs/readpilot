import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative col-span-1 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700">{description}</p>
      <a
        href="#"
        className="inline-flex items-center rounded-lg bg-gray-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-700"
      >
        Try It
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
