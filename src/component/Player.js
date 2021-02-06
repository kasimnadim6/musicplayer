import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  libraryStatus,
  songInfo,
  setSongInfo,
  isSongPlaying,
  setIsSongPlaying,
}) => {
  // Handlers
  const playSongHandler = () => {
    if (isSongPlaying) {
      audioRef.current.pause();
      setIsSongPlaying(!isSongPlaying);
    } else {
      audioRef.current.play();
      setIsSongPlaying(!isSongPlaying);
    }
  };

  const dragHandler = (e) => {
    const currentTime = e.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className={`player ${libraryStatus ? "slid" : ""}`}>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type='range'
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          className='skip-backword'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size='2x'
          icon={isSongPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
