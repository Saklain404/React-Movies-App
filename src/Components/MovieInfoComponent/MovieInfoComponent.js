import React, { useEffect, useState } from "react";
import "./MovieInfoComponent.css";
import axios from "axios";
import { API_KEY } from "../../App";

const MovieInfoComponent = (props) => {
  
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);


  return (
    <div className="MovieInfoContainers">
      {movieInfo?<> 
      <img className="CoverImages" src={movieInfo?.Poster} alt="ggg" />
      <div className="InfoColumns">
        <span className="MovieNames">Movie : {movieInfo?.Title}</span>  
        <span className="Infos">
          IMDB Rating: {movieInfo?.imdbRating}
        </span>
        <span className="Infos">
          Year: {movieInfo?.Year}
        </span>
        <span className="Infos">
          Language: {movieInfo?.Language}
        </span>
        <span className="Infos">
          Rated:  {movieInfo?.Rated}
        </span>
        <span className="Infos">
          Release: {movieInfo?.Released}
        </span>
        <span className="Infos">
          Runtime: {movieInfo?.Runtime}
        </span>
        <span className="Infos">
          Genre:{movieInfo?.Genre}
        </span>
        <span className="Infos">
          Director: <span className="spn">{movieInfo?.Director}</span>
        </span>
        <span className="Infos">
          Actors: <span className="spn">{movieInfo?.Actors}</span>
        </span>
        <span className="Infos">
          Plot: <span className="spn">{movieInfo?.Plot}</span>
        </span>
      </div>
      <div onClick={()=>props.onMovieSelect()}  className="colseBtn">X</div>
      </> : "Loading..."}
    </div>
  );
};
export default MovieInfoComponent;
