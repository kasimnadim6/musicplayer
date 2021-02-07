import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
  audioRef,
  libraryStatus,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  songInfo,
  setSongInfo,
  isSongPlaying,
  setIsSongPlaying,
}) => {
  //Effects
  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
    setSongs(newSongs);
    playAudio(isSongPlaying, audioRef);
  }, [currentSong]);
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

  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-backward") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //Add styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className={`player ${libraryStatus ? "slid" : ""}`}>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className='track'
        >
          <input
            className='player-progress-bar'
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type='range'
          />
          <div style={trackAnim} className='track-animation'></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          className='skip-backword'
          size='2x'
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-backward")}
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
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
