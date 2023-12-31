import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Cousine } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`bg-background ${inter.variable} ${cousine.variable} text-text font-body`}
    >
      <Component {...pageProps} />
    </div>
  );
}
