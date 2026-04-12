import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MKP Renewable Energy Pvt Limited — Powering the Future",
  description:
    "End-to-end renewable energy infrastructure for enterprises, industries, and communities.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
