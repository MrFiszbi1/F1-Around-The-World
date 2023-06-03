import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import MapIcon from "@mui/icons-material/Map";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";

const SidebarMenu = ({ collapseSidebar }) => {
  return (
    <Menu>
      <MenuItem
        icon={
          <MenuRoundedIcon
            onClick={() => {
              collapseSidebar();
            }}
          />
        }
      >
        <h4>F1 Around The World</h4>
      </MenuItem>
      <MenuItem
        component={<Link to="/" className="link" />}
        className="menu1"
        icon={<HomeIcon />}
      >
        Home
      </MenuItem>
      <MenuItem
        component={<Link to="geochart" className="link" />}
        icon={<MapIcon />}
      >
        Geo Chart
      </MenuItem>
      <MenuItem
        component={<Link to="countrycomparison" className="link" />}
        icon={<BarChartIcon />}
      >
        Country Comparison
      </MenuItem>
    </Menu>
  );
};

export default SidebarMenu;
