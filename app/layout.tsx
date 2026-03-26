import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Mountain | Photo Essay",
  description:
    "A photo essay about A Mountain in Tempe, Arizona, adapted into an immersive website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
