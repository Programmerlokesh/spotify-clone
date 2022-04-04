import React, { useRef, useState } from "react";
import { BsDownload } from "react-icons/bs";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import "../Styles/MusicPlayer.css";

function MusicPlayer({ song, imgSrc }) {
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const audioPlayer = useRef(); //Our Audio tage
  const progressBar = useRef(); // our Progress bar

  const chnageLoved = () => {
    setLove(!isLove);
  };

  const changeplay = () => {
    setPlaying(!isPlaying);
  };
  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={chnageLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>

            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
                <i>
                  <FaBackward />
                </i>
              </i>
            </div>
            <div className="playPause" onClick={changeplay}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input type="range" className="progresBar" />
          <div className="duration">00:00</div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
