import React from "react";
import "./Sidebar.scss";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ListIcon from "@mui/icons-material/List";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const Sidebar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">School learning system</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardCustomizeIcon className="icon" />
            <Link to="/home">
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsIcon className="icon" />
            <Link to="/stats">
              <span>Stats</span>
            </Link>
          </li>
          <li>
            <ListIcon className="icon" />
            <Link to="/todo">
              <span>Todo</span>
            </Link>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <Link to="/discussion">
              <span>Discussion</span>
            </Link>
          </li>
          <p className="title">Service</p>
          <li>
            <ManageAccountsIcon className="icon" />
            <Link to="/profile">
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
