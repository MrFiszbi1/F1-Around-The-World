import { Sidebar, useProSidebar } from "react-pro-sidebar";
import SidebarMenu from "./components/SidebarMenu";
import { Routes, Route } from "react-router-dom";
import GeoChart from "./page/GeoChart";
import CountryComparison from "./page/countryComparison";
import Home from "./page/Home";

export default function App() {
  const { collapseSidebar, isSidebarCollapsed } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        className="app"
        style={{
          backgroundColor: "rgb(0, 249, 249)",
        }}
      >
        <SidebarMenu collapseSidebar={collapseSidebar} />
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="geochart" element={<GeoChart />} />
          <Route path="countrycomparison" element={<CountryComparison />} />
        </Routes>
      </section>
    </div>
  );
}
