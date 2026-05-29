import { lazy, Suspense } from "react";

import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurServices from "./OurServices";
import StatsSection from "../components/StatsSection";
import LoadingRing from "../components/LoadingRing";

const HeroCarousel2 = lazy(() => import("../components/HeroCarousel2"));
const EDPJourney = lazy(() => import("./EDPJourney"));
const MembershipPlans = lazy(() => import("./MembershipPlans"));
const SupportPage = lazy(() => import("./SupportPage"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingRing />}>
        <HeroCarousel2 />
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
