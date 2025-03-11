/* eslint-disable no-unused-vars */
import "./youtube.css";
import hamburgerMenu from './resources/hamburger-menu.svg';
import youtubeLogo from './resources/youtube-logo.svg';
import searchIcon from './resources/search-icon2.png';
import tia from './resources/tia.png';
import close from './resources/close.png';
import add from './resources/add.png';
import bellSvg from './resources/bell-svg.svg';
import myLogo from './resources/my-logo.jpg';
import mic from './resources/microphone.png'

export default {
  title: "YouTube-Header",
  tags: ["autodocs"],

};

export const Header = () => {
  return (
    <div className="page-div">
      <div className="header">
        <div className="header-menu-div">
          <button className="hamburger-menu"></button>
          <img src={hamburgerMenu} className="search-inner-icon" alt="menu" />
          <img src={youtubeLogo} className="youtube-logo" alt="YouTube Logo" />
        </div>
        <div className="header-search-div">
          <div className="search-bar-div">
            <input type="text" className="search-bar" placeholder="Search" />
          </div>
          <img src={searchIcon} className="magnifying-glass" alt="search" />
          <button className="keyboard-button">
            <img src={tia} className="keyboard-search-icon" alt="keyboard" />
          </button>
          <button className="delete-text-button">
            <img src={close} className="delete-image" alt="delete" />
          </button>
          <button className="search-button">
            <img src={searchIcon} className="search-button-image" alt="search button" />
          </button>
          <button className="voice-button">
            <img src={mic} className="voice-button-image" alt="voice search" />
          </button>
        </div>
        <div className="header-miscellaneous-div">
          <button className="create-button">
            <img src={add} className="create-button-image" alt="add" />
            Create
          </button>
          <button className="bell-button">
            <img src={bellSvg} className="bell-button-image" alt="bell" />
            <div className="bell-notification">2</div>
          </button>
          <button className="logo-button">
            <img src={myLogo} className="logo-image" alt="user logo" />
          </button>
        </div>
      </div>
    </div>
  );
};