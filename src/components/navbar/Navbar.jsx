import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="Search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <ChatIcon />
          </div>
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <CalendarMonthIcon />
          </div>

          <div className="item">
            <Link to="/profile">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
