import React from "react";
import "./Header.css";
import SearchIcon from "../../img/search-icon.svg";
import MovieIcon from "../../img/movie-icon.svg";

function Header(props) {

  return (
    <div className="header">
      <div className="left">
        <img className="movieIcon" src={MovieIcon} alt="photos"/>
        <span className="header-name">React Movie App</span>
      </div>
      <div className="search-bar">
        <img src={SearchIcon} alt="search-icon" />
        <input
        value={props.values}
           onChange={props.textChange}
          className="search-box"
          type="text"
          src={SearchIcon}
          placeholder="Search Movie"
        />
      </div>
    </div>
  );
}

export default Header;
