import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <div className="text-center">
        <p>This page information is obtained from the Scrapbox API.</p>
        <Link href="https://scrapbox.io/toB-no-nikki/">
          https://scrapbox.io/toB-no-nikki/
        </Link>
      </div>
    </footer>
  );
}
