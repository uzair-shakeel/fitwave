import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/home/Hero";
import GetStarted from "./components/home/GetStarted";
import Cards from "./components/home/Cards";
import ReadyforTakeoff from "./components/home/ReadyforTakeoff";
import BetterWay from "./components/BetterWay";

export default function Home() {
  return (
    <div className="bg-blue-300">
      <Header />
      <HeroSection />

      <BetterWay />
      <Cards />
      <ReadyforTakeoff />
      <GetStarted />
      <Footer />
    </div>
  );
}
