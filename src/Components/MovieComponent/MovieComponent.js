import React from "react";
import './MovieComponent.css'


const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div onClick={()=>{props.onMovieSelect(imdbID);}} className="MovieContainer" >
        <img className="CoverImage" src={Poster} alt="poster"/>
        <span className="MovieName">{Title}</span>
        <div className="InfoColumn">
            <span className="MovieInfo"> Year : {Year}</span>
            <span className="MovieInfo">Type: {Type}</span>

        </div>

    </div>
  );
};
export default MovieComponent;









