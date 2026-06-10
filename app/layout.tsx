import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.metadata.defaultTitle,
  description: siteConfig.metadata.defaultDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
