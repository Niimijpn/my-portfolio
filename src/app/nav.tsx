import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Link className="text-lg font-bold" href="/">
          213
        </Link>
        <Link className="text-sm" href="/Nippou">
          Nippou
        </Link>
      </div>
    </nav>
  );
}
