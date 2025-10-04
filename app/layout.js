import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of Nilgiris, surrounded by mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} bg-primary-950 relative min-h-screen antialiased text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
