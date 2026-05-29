import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import LoadingRing from "./components/LoadingRing";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const EDPPage = lazy(() => import("./pages/EDPPage"));
const Services = lazy(() => import("./pages/Services"));
const StartupPage = lazy(() => import("./pages/StartupPage"));
const StartupDirectory = lazy(() => import("./pages/StartupDirectory"));
const Courses = lazy(() => import("./pages/Courses"));
const EnterpreneurshipPage = lazy(() => import("./pages/EntrepreneurshipPage"));
const Schemes = lazy(() => import("./pages/Schemes"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const Downloads = lazy(() => import("./pages/Downloads"));
const CareerLanding = lazy(() => import("./pages/CareerLanding"));

export default function App() {
  return (
    <Suspense fallback={<LoadingRing />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/edp" element={<EDPPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/startup/directory" element={<StartupDirectory />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/entrepreneurship" element={<EnterpreneurshipPage />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/download" element={<Downloads />} />
          <Route path="/careers" element={<CareerLanding />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
