import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
export const metadata: Metadata = {
  title: "Babble - Voice Note",
  description: "Frontend Assignment",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={` antialiased`}>{children}</body>
      </html>
    </Providers>
  );
}
