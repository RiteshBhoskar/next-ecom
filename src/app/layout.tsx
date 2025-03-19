import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./provider";
import Navbar from "~/components/Navbar";

export const metadata: Metadata = {
  title: "Tech Wave",
  description: "This is an ecommerce website built with Next.js and Tailwind CSS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
