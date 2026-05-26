import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import EventsPage from "./pages/EventsPage";
import EDPPage from "./pages/EDPPage";
import Services from "./pages/Services";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/edp" element={<EDPPage />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
