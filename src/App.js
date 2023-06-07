import "./styles.css";
import { Sidebar, useProSidebar } from "react-pro-sidebar";
import SidebarMenu from "./components/SidebarMenu";
import { Routes, Route } from "react-router-dom";
import GeoChart from "./page/GeoChart";
import CountryComparison from "./page/countryComparison";
import Home from "./page/Home";

export default function App() {
  const { collapseSidebar, isSidebarCollapsed } = useProSidebar();

  return (
    <div className="App">
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ height: "100%", backgroundColor: "#18405f" }}>
          <Sidebar className="app" defaultCollapsed={true}>
            <SidebarMenu collapseSidebar={collapseSidebar} />
          </Sidebar>
        </div>

        <section style={{ width: "100%", margin: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="geochart" element={<GeoChart />} />
            <Route path="countrycomparison" element={<CountryComparison />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}
