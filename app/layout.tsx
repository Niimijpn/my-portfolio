import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import { noto_sans_jp } from "@/app/ui/fonts";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";

config.autoAddCss = false


export const metadata: Metadata = {
  title: "新美のポートフォリオ",
  description: "新美のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="jp">
      <body className={`${noto_sans_jp.className}`}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
    </>
  );
}
