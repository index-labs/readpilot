import Link from "next/link";

export default function Header() {
  return (
    <header
      className={
        "mt-5 flex w-full items-center justify-between border-b-2 px-2 pb-7 sm:px-4"
      }
    >
      <Link href="/" className={"flex space-x-3"}>
        <h1 className={"ml-2 text-2xl font-bold tracking-tight sm:text-4xl"}>
          Read Pilot
        </h1>
      </Link>
    </header>
  );
}
