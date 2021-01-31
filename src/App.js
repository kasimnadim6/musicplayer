import React from "react";
import "./styles/app.scss";
import Song from "./component/Song";
import Player from "./component/Player";

function App() {
  return (
    <div className='App'>
      <Song />
      <Player />
    </div>
  );
}

export default App;
