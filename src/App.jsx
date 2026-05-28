import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import EventsPage from "./pages/EventsPage";
import EDPPage from "./pages/EDPPage";
import Services from "./pages/Services";
import StartupPage from "./pages/StartupPage";
import StartupDirectory from "./pages/StartupDirectory";
import Courses from "./pages/Courses";
import EnterpreneurshipPage from "./pages/EntrepreneurshipPage";

export default function App() {
  return (
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
      </Route>
    </Routes>
  );
}
