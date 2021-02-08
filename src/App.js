import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Nav from "./component/Nav";
import Song from "./component/Song";
import Player from "./component/Player";
import data from "./data";
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
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Handlers
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    const roundCurrentTime = Math.round(currentTime);
    const roundDuration = Math.round(duration);
    const animationPercentage = (roundCurrentTime / roundDuration) * 100;
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage });
  };
  const songEndedHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isSongPlaying) audioRef.current.play();
  };
  return (
    <div className='app'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song libraryStatus={libraryStatus} currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
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
        onEnded={songEndedHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
