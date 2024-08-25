import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/home/Hero";
import TestimonialSection from "./components/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#192227]">
      <Header />
      <HeroSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
