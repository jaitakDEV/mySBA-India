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

// import HeroCarousel from "../components/HeroCarousel";
// import AboutUs from "./AboutUs";
// import Contact from "./Contact";
// import OurServices from "./OurServices";
// import EDPJourney from "./EDPJourney";
// import MembershipPlans from "./MembershipPlans";
// import StatsSection from "../components/StatsSection";
// import SupportPage from "./SupportPage";

// export default function Home() {
//   return (
//     <main className="relative bg-gradient-to-br from-[#fff5eb] via-[#f7efe5] to-[#f5d8ba] overflow-hidden">
//       {/* GLOBAL GLOWS (ONLY ONCE) */}
//       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ff7a00] opacity-20 blur-3xl rounded-full" />
//       <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#ff7a00] opacity-20 blur-3xl rounded-full" />

//       {/* SECTIONS */}
//       <HeroCarousel />
//       <AboutUs />
//       <StatsSection />
//       <OurServices />
//       <EDPJourney />
//       <MembershipPlans />

//       {/* IMPORTANT: NO separate backgrounds inside these */}
//       <Contact />
//       <SupportPage />
//     </main>
//   );
// }
