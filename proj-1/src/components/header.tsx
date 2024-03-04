import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full text-white absolute z-10">
      <nav className="relative flex flex-wrap items-center justify-between">
        <Link className="font-bold text-3xl" href="/">
          {" "}
          Home Page
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance"> Performance</Link>
          <Link href="/reliability"> Reliability </Link>
          <Link href="/scale"> Scale</Link>
        </div>
      </nav>
    </div>
  );
}
