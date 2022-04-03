import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaEllipsisH, FaSpotify } from "react-icons/fa";
import "../Styles/LeftMenu.css";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} menuObject={MenuList} />

      <MenuPlayList />
    </div>
  );
}

export { LeftMenu };