import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sampath Portifolio",
  description: "Portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.jpeg" type="image/jpeg" />
      </head>
      <body   className={inter.className}>{children}</body>
    </html>
  );
}
