import "@/styles/tailwind.css";
import { Inter as FontSans } from "next/font/google";
import React from "react";
import Header from "@/app/(app)/_features/header";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
