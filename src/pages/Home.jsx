import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurServices from "./OurServices";
import EDPJourney from "./EDPJourney";
import MembershipPlans from "./MembershipPlans";
import StatsSection from "../components/StatsSection";
import SupportPage from "./SupportPage";
import HeroCarousel2 from "../components/HeroCarousel2";

export default function Home() {
  return (
    <>
      <HeroCarousel2 />
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
