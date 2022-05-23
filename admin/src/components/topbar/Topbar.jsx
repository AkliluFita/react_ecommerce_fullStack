import React from "react";
import "./Topbar.css";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar_wrapper">
        <div className="topbar__left">
          <span className="logo">Abdu Admin</span>
        </div>
        <div className="topbar__right">
          <div className="icon__container">
            <Badge color="secondary" badgeContent={99}>
              <NotificationsIcon />
            </Badge>
            <Badge color="secondary" badgeContent={99}>
              <LanguageIcon />
            </Badge>
            <SettingsOutlinedIcon />
            <img
              src="https://images.pexels.com/photos/10011010/pexels-photo-10011010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="profileImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
