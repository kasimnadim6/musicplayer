import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  libraryStatus,
  isSongPlaying,
  songs,
  setSongs,
  setCurrentSong,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h1 className='library-header'>Library</h1>
      {songs.map((song) => (
        <LibrarySong
          audioRef={audioRef}
          isSongPlaying={isSongPlaying}
          key={song.id}
          song={song}
          songs={songs}
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
        />
      ))}
    </div>
  );
};

export default Library;
