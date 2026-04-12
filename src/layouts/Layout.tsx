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
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>
      <Nav />
      <main id="main-content" className={isWide ? "main main--wide" : "main"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
