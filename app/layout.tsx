import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from "@mui/material";
import { theme } from "@/app/ui/typograhy";

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
    <ThemeProvider theme={theme}>
    <html lang="jp">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
    </ThemeProvider>
    </>
  );
}
