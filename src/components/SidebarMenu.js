import React from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedbackIcon from "@mui/icons-material/Feedback";
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
        icon={<DashboardIcon />}
      >
        Geo Chart
      </MenuItem>
      <MenuItem
        component={<Link to="barchart" className="link" />}
        icon={<FeedbackIcon />}
      >
        Bar Chart
      </MenuItem>
    </Menu>
  );
};

export default SidebarMenu;
