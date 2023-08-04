import Navbar from "@/components/Navbar/Navbar";
import "@/scss/global.scss";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Loading from "@/components/Loading/Loading";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Developer Student Club at IIIT Lucknow - Powered By Google Developers",
  description: "DSCLucknow is a community group for developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Loading>
          <Navbar />
          {children}
        </Loading>
      </body>
    </html>
  );
}
