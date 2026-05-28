import HeroCarousel from "../components/HeroCarousel";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurServices from "./OurServices";
import EDPJourney from "./EDPJourney";
import MembershipPlans from "./MembershipPlans";
import StatsSection from "../components/StatsSection";
import SupportPage from "./SupportPage";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutUs />
      <StatsSection />
      <OurServices />
      <EDPJourney />
      <MembershipPlans />
      <Contact />
      <SupportPage />
    </>
  );
}
