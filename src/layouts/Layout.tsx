import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const wideRoutes = ["/projects"];
const exactWideRoutes = ["/"];

export default function Layout() {
  const { pathname } = useLocation();
  const isWide =
    wideRoutes.some((r) => pathname.startsWith(r)) ||
    exactWideRoutes.includes(pathname);

  return (
    <div className="layout">
      <Nav />
      <main className={isWide ? "main main--wide" : "main"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
