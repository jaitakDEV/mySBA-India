import HeroCarousel from "../components/HeroCarousel";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurServices from "./OurServices";
import EDPJourney from "./EDPJourney";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutUs />
      <OurServices />
      <EDPJourney />
      <Contact />
    </>
  );
}
