import React from "react";

const Song = ({ libraryStatus, currentSong }) => {
  return (
    <div className={`song-container ${libraryStatus ? "slid" : ""}`}>
      <img
        className='cover'
        alt={currentSong.name}
        src={currentSong.cover}
      ></img>
      <h2 className='song-name'>{currentSong.name}</h2>
      <h3 className='song-artist'>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
