import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Nav from "./component/Nav";
import Song from "./component/Song";
import Player from "./component/Player";
import data from "./util";
import Library from "./component/Library";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Handlers
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };
  return (
    <div className='app'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song libraryStatus={libraryStatus} currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
      <Library
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        isSongPlaying={isSongPlaying}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
