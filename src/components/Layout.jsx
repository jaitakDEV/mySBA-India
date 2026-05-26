import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-16"></main>
      <Outlet />
    </>
  );
}
