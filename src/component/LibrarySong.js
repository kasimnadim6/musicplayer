import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  audioRef,
  isSongPlaying,
  song,
  setCurrentSong,
  songs,
  setSongs,
}) => {
  const classNames = ["library-song"];
  if (song.active) {
    classNames.push("selected");
  }

  //Event Handlers
  const songSelectHandler = (e) => {
    setCurrentSong(song);
    //Add active state
    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    playAudio(isSongPlaying, audioRef);
  };
  return (
    <div className={classNames.join(" ")} onClick={songSelectHandler}>
      <img className='cover' alt={song.name} src={song.cover}></img>
      <div>
        <h3 className='song-name'>{song.name}</h3>
        <h4 className='song-artist'>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
