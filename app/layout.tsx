import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TypeMaster - Pre-Order Page",
  description: "Project created as part of front end mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
