import Preloader from "@/components/Preloader";
import Background from "@/components/Background";
import Stars from "@/components/Stars";
import Celestial from "@/components/Celestial";
import Mountains from "@/components/Mountains";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <div className="page-root">
      <Preloader />

      {/* fixed decorative layers */}
      <Background />
      <Stars />
      <Celestial />
      <Mountains />

      {/* content */}
      <Navbar />
      <Hero />
      <Ticker />
    </div>
  );
}
