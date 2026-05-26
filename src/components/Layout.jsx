import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../pages/Footer";
import ScrollToTop from "./ScrollToTop";
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="pt-16"></main>
      <Outlet />
      <Footer />
    </>
  );
}
