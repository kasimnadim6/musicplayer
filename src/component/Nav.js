import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className={`nav ${libraryStatus ? "slid" : ""}`}>
      <h1 className='nav-header'>Waves</h1>
      <button
        className='btn-library'
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        Library
        <FontAwesomeIcon className='icon-music' icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
