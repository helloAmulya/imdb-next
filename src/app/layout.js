import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "myClone",
  description: "This is a Movie Database Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
