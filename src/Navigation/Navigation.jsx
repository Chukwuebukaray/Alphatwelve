import React from "react";
import "./Navigation.css";
import calendar from "../assets/calendar.png";
import reports from "../assets/reports.png";
import speakers from "../assets/speakers.png";
import notifications from "../assets/notifications.png";
import messages from "../assets/messages.png";
import settings from "../assets/settings.png";
import collapse from "../assets/collapse.png";
import avatar from "../assets/avatar.png";

const Navigation = () => {
  return (
    <nav>
      <div className="top">
        <div className="logobox">
          <div className="logo">Full Logo</div>
        </div>
        <div className="navitems">
          <div className="navitem">
            <img src={calendar} />
            <text>Home</text>
          </div>
          <div className="navitem">
            <img src={calendar} />
            <text>Events</text>
          </div>
          <div className="navitem">
            <img src={speakers} />
            <text>Speakers</text>
          </div>
          <div className="navitem">
            <img src={reports} />
            <text>Reports</text>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="navitems">
          <div className="navitem">
            <img src={notifications} />
            <text>Notifications</text>
          </div>
          <div className="navitem">
            <img src={messages} />
            <text>Messages</text>
          </div>
          <div className="navitem">
            <img src={settings} />
            <text>Settings</text>
          </div>
          <div className="navitem">
            <img src={collapse} />
            <text>Collapse</text>
          </div>
        </div>
        <div className="toggle">
          <img src={collapse} />
          <text>Dark Mode</text>
        </div>
        <div className="profile">
          <img src={avatar} />
          <div className="userinfo">
            <div className="username">Rudra Devi</div>
            <div className="useremail">rudra.devi@gmail.com</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
