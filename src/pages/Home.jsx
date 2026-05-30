import { lazy, Suspense } from "react";

import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurServices from "./OurServices";
import StatsSection from "../components/StatsSection";
import LoadingRing from "../components/LoadingRing";

import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import slide5 from "../assets/slide5.webp";

const HeroCarousel2 = lazy(() => import("../components/HeroCarousel2"));
const EDPJourney = lazy(() => import("./EDPJourney"));
const MembershipPlans = lazy(() => import("./MembershipPlans"));
const SupportPage = lazy(() => import("./SupportPage"));

const homeSlides = [
  {
    id: 1,
    title: "",
    subtitle: "",
    description: "",
    src: slide1,
    accent: "#6EE7B7",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    description: "",
    src: slide2,
    accent: "#FCD34D",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    description: "",
    src: slide3,
    accent: "",
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    description: "",
    src: slide4,
    accent: "#60A5FA",
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    description: "",
    src: slide5,
    accent: "#A78BFA",
  },
];

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingRing />}>
        <HeroCarousel2 slides={homeSlides} />
      </Suspense>

      <AboutUs />

      <StatsSection />

      <OurServices />

      <Suspense fallback={<LoadingRing />}>
        <EDPJourney />
      </Suspense>

      <Suspense fallback={<LoadingRing />}>
        <MembershipPlans />
      </Suspense>

      <Contact />

      <Suspense fallback={<LoadingRing />}>
        <SupportPage />
      </Suspense>
    </>
  );
}
