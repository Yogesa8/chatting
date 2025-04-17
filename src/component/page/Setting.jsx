import React, { useState } from "react";
import "./UserProfile.css";
import martin from "./../../assets/profile/Martin.png";
import { FaHandsHelping, FaMapMarkerAlt, FaRegStar } from "react-icons/fa";
import { LuLanguages, LuSettings2 } from "react-icons/lu";
import { FcInvite, FcPrivacy } from "react-icons/fc";
import { IoColorPaletteOutline, IoListSharp } from "react-icons/io5";
import {
  MdDevices,
  MdFavoriteBorder,
  MdOutlineManageAccounts,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { RiChatSettingsLine } from "react-icons/ri";
import { LiaUserEditSolid } from "react-icons/lia";
import { GrStorage } from "react-icons/gr";
import { BsBroadcast } from "react-icons/bs";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBack = () => {
    setSelectedOption(null);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Avatar":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Avatar</h2>
            </div>
            <div className="options">
              <ProfileOption label="Browse sticker" />
              <hr />
              <ProfileOption label="create profile photo" />
              <hr />
              <ProfileOption label="learn more" />
              <hr />
            </div>

            <div className="options">
              <ProfileOption label="delete avatar" />
              <hr />
            </div>
          </div>
        );
      case "Lists":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Lists</h2>
            </div>
            <div className="options">
              <ProfileOption label="Favourities" />
              <hr />
              <ProfileOption label="Groups" />
              <hr />
              <ProfileOption label="Unread" />
              <hr />
            </div>

            <div className="options">
              <ProfileOption label="delete avatar" />
              <hr />
            </div>
          </div>
        );
      case "Brodcast messages":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Brodcast messages</h2>
            </div>
            <p>No Brodcast Message</p>
          </div>
        );
      case "Starred messages":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Starred messages</h2>
            </div>
            <p>No Starred Chats or Messages</p>
          </div>
        );
      case "Linked devices":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Linked devices</h2>
            </div>
            <QRCode value="" size={256} level="H" className="qr" />
            <button className="link_device">link devices</button>
          </div>
        );
      case "Account":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Account</h2>
            </div>
            <div className="options">
              <ProfileOption label="Security Notification" />
              <hr />
              <ProfileOption label="Two step verification" />
              <hr />
              <ProfileOption label="Email address" />
              <hr />
              <ProfileOption label="Passkeys" />
              <hr />
              <ProfileOption label="Change phone number" />
              <hr />
            </div>

            <div className="options">
              <ProfileOption label="Request account info" />
              <hr />
              <ProfileOption label="delete my account" />
              <hr />
            </div>
          </div>
        );
      case "Privacy & Security":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Privacy & Security</h2>
            </div>
            <div className="options">
              <ProfileOption label="last seen" />
              <hr />
              <ProfileOption label="profile photo" />
              <hr />
              <ProfileOption label="About" />
              <hr />
              <ProfileOption label="links" />
              <hr />
              <ProfileOption label="Groups" />
              <hr />
              <ProfileOption label="Status" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="privacy" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="Calls" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="Blocked" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="read receipts" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="Advanced" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="Privacy checkup" />
              <hr />
            </div>
          </div>
        );
      case "Chat":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Chat</h2>
            </div>
            <div className="options">
              <ProfileOption label="default chat theme" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="save to photo" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="chat backup" />
              <hr />
              <ProfileOption label="export chat" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="voice call" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="clear all chats" style={{ color: "red" }} />
              <hr />
            </div>
            <div className="options">
              <ProfileOption
                label="delete all chats"
                style={{ color: "red" }}
              />
              <hr />
            </div>
          </div>
        );
      case "Notifications":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
            </div>
            <h2>Notifications</h2>
            <div className="options">
              <ProfileOption label="show notification" />
              <hr />
              <ProfileOption label="sound" />
              <hr />
              <ProfileOption label="reaction notification sound" />
              <hr />
            </div>
            <div className="options">
              <ProfileOption label="reset notification" />
              <hr />
            </div>
          </div>
        );
      case "Storages and data":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Storages and data</h2>
            </div>
            <p>Manage chat wallpaper, font size, and backup.</p>
          </div>
        );
      case "Help":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Help</h2>
            </div>
            <div className="options">
              <ProfileOption label="help center" />
              <hr />
              <ProfileOption label="Terms and Privacy Policy" />
              <hr />
              <ProfileOption label="Channel reports" />
              <hr />
              <ProfileOption label="Licenses" />
              <hr />
            </div>
          </div>
        );
      case "Invite a friend":
        return (
          <div className="section-page">
            <div className="page_header">
              <button className="back-btn" onClick={handleBack}>
                Back
              </button>
              <h2>Invite a friend</h2>
            </div>
            <p>Manage chat wallpaper, font size, and backup.</p>
          </div>
        );
      default:
        return (
          <div className="user-profile">
            <div className="page_header">
              <button className="back-btn" onClick={() => navigate(-1)}>
                Back
              </button>
              <h2>Settings</h2>
            </div>
            <div className="profile-header">
              <img src={martin} alt="Profile" className="profile-img" />
              <h2 className="username">Martin</h2>
              <p className="location">
                <FaMapMarkerAlt className="location-icon" /> NY, New York
              </p>
            </div>

            <div className="stats">
              <div>
                <p className="stat-number">1501</p>
                <p className="stat-label">Followers</p>
              </div>
              <div>
                <p className="stat-number">792</p>
                <p className="stat-label">Following</p>
              </div>
            </div>
            {/* 1st */}
            <div className="options">
              <ProfileOption
                icon={<LiaUserEditSolid />}
                label="Avatar"
                onClick={() => setSelectedOption("Avatar")}
              />
              <hr />
            </div>
            {/* 2nd */}
            <div className="options">
              <ProfileOption
                icon={<IoListSharp />}
                label="Lists"
                onClick={() => setSelectedOption("Lists")}
              />
              <hr />
              <ProfileOption
                icon={<BsBroadcast />}
                label="Brodcast messages"
                onClick={() => setSelectedOption("Brodcast messages")}
              />
              <hr />
              <ProfileOption
                icon={<FaRegStar />}
                label="Starred messages"
                onClick={() => setSelectedOption("Starred messages")}
              />
              <hr />
              <ProfileOption
                icon={<MdDevices />}
                label="Linked devices"
                onClick={() => setSelectedOption("Linked devices")}
              />
              <hr />
            </div>
            {/* 3rd */}
            <div className="options">
              <ProfileOption
                icon={<MdOutlineManageAccounts />}
                label="Account"
                onClick={() => setSelectedOption("Account")}
              />
              <hr />
              <ProfileOption
                icon={<RiChatSettingsLine />}
                label="Chat"
                onClick={() => setSelectedOption("Chat")}
              />
              <hr />
              <ProfileOption
                icon={<MdOutlineNotificationsActive />}
                label="Notifications"
                onClick={() => setSelectedOption("Notifications")}
              />
              <hr />
              <ProfileOption
                icon={<FcPrivacy />}
                label="Privacy & Security"
                onClick={() => setSelectedOption("Privacy & Security")}
              />
              <hr />
              <ProfileOption
                icon={<GrStorage />}
                label="Storages and data"
                onClick={() => setSelectedOption("Storages and data")}
              />
              <hr />
            </div>
            {/* 4th */}
            <div className="options">
              <ProfileOption
                icon={<FaHandsHelping />}
                label="Help"
                onClick={() => setSelectedOption("Help")}
              />
              <hr />
              <ProfileOption
                icon={<FcInvite />}
                label="Invite a friend"
                onClick={() => setSelectedOption("Invite a friend")}
              />
              <hr />
            </div>
          </div>
        );
    }
  };

  return renderContent();
};

const ProfileOption = ({ icon, label, onClick }) => (
  <div className="option" onClick={onClick}>
    <div className="option-left">
      <span className="icon">{icon}</span>
      <div className="text">
        <p className="label">{label}</p>
        {/* You can add a subtext here if needed */}
      </div>
    </div>
    <span className="arrow">&gt;</span>
  </div>
);

export default Setting;
