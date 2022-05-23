import React from "react";
import "./Sidebar.css";
import {
  LineStyleOutlined,
  TimelineOutlined,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Timeline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__menu">
          <h2 className="sidebar__title">dashboard</h2>
          <ul className="sidebar__list">
           <Link to='/' className='link'>
           <li className="listItem active">
              <LineStyleOutlined className="topbar__icon" />
              Home
            </li>
           </Link>
            <li className="listItem">
              <TimelineOutlined className="topbar__icon" />
              analytics
            </li>
            <li className="listItem">
              <TrendingUp className="topbar__icon" />
              sales
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h2 className="sidebar__title">Quick Menu</h2>
          <ul className="sidebar__list">
            <Link to='/users' className='link'>
            <li className="listItem active">
              <PermIdentity className="topbar__icon" />
              Users
            </li>
            </Link>
            <Link to='/products' className='link'>
            <li className="listItem">
              <Storefront className="topbar__icon" />
              Products
            </li>
            </Link>
            <li className="listItem">
              <AttachMoney className="topbar__icon" />
              Transactions
            </li>
            <li className="listItem">
              <BarChart className="topbar__icon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h2 className="sidebar__title">Notifications</h2>
          <ul className="sidebar__list">
            <li className="listItem active">
              <MailOutline className="topbar__icon" />
              Mail
            </li>
            <li className="listItem">
              <DynamicFeed className="topbar__icon" />
              Feedback
            </li>
            <li className="listItem">
              <ChatBubbleOutline className="topbar__icon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebar__menu">
          <h2 className="sidebar__title">Staff</h2>
          <ul className="sidebar__list">
            <li className="listItem active">
              <WorkOutline className="topbar__icon" />
              Manage
            </li>
            <li className="listItem">
              <Timeline className="topbar__icon" />
              Analytics
            </li>
            <li className="listItem">
              <Report className="topbar__icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
