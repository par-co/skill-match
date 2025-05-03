import "./RootLayout.css";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header title="SkillMatch" />
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
