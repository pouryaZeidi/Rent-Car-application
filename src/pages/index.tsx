import HeroSection from "@/components/HeroSection";
import PosterSection from "@/components/PosterSection";
import CarCards from "@/components/staibleCars/CarCards";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="">
        <HeroSection/>
        <PosterSection/>
        <CarCards/>
      </main>

      
    </div>
  );
}
