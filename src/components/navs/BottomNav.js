import React from "react";
import "./Navs.css";

// Button Icons
import IconHome from "../../icons/Menu.svg";
import IconNews from "../../icons/Megaphone.svg";
import IconChecklist from "../../icons/Calendar.svg";
import IconShopping from "../../icons/Cart-2.svg";
import IconSettings from "../../icons/Settings.svg";

const BottomNav = () => {
  return (
    <nav id="bottom-nav">
      <div className="nav-group">
        <img src={IconHome} alt="home" />
        <label>Home</label>
      </div>

      <div className="nav-group-2">
        <div className="nav-group">
          <img src={IconNews} alt="home" />
          <label>News</label>
        </div>
        <div className="nav-group">
          {" "}
          <img src={IconChecklist} alt="home" />
          Checklist
        </div>
        <div className="nav-group">
          {" "}
          <img src={IconShopping} alt="home" />
          Shopping
        </div>
      </div>

      <div className="nav-group">
        {" "}
        <img src={IconSettings} alt="home" />
        Settings
      </div>
    </nav>
  );
};

export default BottomNav;
