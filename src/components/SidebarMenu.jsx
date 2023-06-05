import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import MapIcon from "@mui/icons-material/Map";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

const SidebarMenu = ({ collapseSidebar }) => {
  return (
    <Menu
      style={{
        backgroundColor: "#18405f",
        height: "100%",
        color: "white",
      }}
    >
      <MenuItem
        icon={
          <MenuRoundedIcon
            onClick={() => {
              collapseSidebar();
            }}
            sx={{
              color: blueGrey[50],
            }}
          />
        }
      >
        <h4>F1 Around The World</h4>
      </MenuItem>
      <MenuItem
        component={<Link to="/" className="link" />}
        className="menu1"
        icon={<HomeIcon sx={{ color: blueGrey[50] }} />}
      >
        Home
      </MenuItem>
      <MenuItem
        component={<Link to="geochart" className="link" />}
        icon={<MapIcon sx={{ color: blueGrey[50] }} />}
      >
        Geo Chart
      </MenuItem>
      <MenuItem
        component={<Link to="countrycomparison" className="link" />}
        icon={<BarChartIcon sx={{ color: blueGrey[50] }} />}
      >
        Country Comparison
      </MenuItem>
    </Menu>
  );
};

export default SidebarMenu;
