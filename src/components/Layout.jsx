import HeaderTop from "./Others/Head/Top";
import Footer from "./Others/Footer/Index";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <HeaderTop />
      <Outlet />
      <Footer />
    </>
  );
}
