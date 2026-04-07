import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Track My Spending",
  description: "Snap a photo, get structured spending data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
