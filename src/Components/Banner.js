import React from "react";
import { FaCheck, FaEllipsisH, FaHeadphones } from "react-icons/fa";
import Artist from "../img/artist.jpg";
import Check from "../img/check.png";

function Banner() {
  return (
    <div className="banner">
      <img src={Artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>
              <img src={Check} alt="" />
            </div>
            <p>
              <i>
                <FaHeadphones />
                11,184,1811
              </i>
              <span>Monthly listener</span>
            </p>
          </div>
          <div className="right">
            <a href="/">Play</a>
            <a href="/">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
}

export { Banner };
