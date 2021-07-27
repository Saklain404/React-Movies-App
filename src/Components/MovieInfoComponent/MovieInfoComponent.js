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
        <div className="Infos">
          IMDB Rating: <span className="spn">{movieInfo?.imdbRating}</span>
        </div>
        <div className="Infos">
          Year: <span className="spn">{movieInfo?.Year}</span>
        </div>
        <div className="Infos">
          Language: <span className="spn">{movieInfo?.Language}</span>
        </div>
        <div className="Infos">
          Rated: <span className="spn"> {movieInfo?.Rated}</span>
        </div>
        <div className="Infos">
          Release: <span className="spn">{movieInfo?.Released}</span>
        </div>
        <div className="Infos">
          Runtime: <span className="spn">{movieInfo?.Runtime}</span>
        </div>
        <div className="Infos">
          Genre: <span className="spn">{movieInfo?.Genre}</span>
        </div>
        <div className="Infos">
          Director: <span className="spn">{movieInfo?.Director}</span>
        </div>
        <div className="Infos">
          Actors: <span className="spn">{movieInfo?.Actors}</span>
        </div>
        <div className="Infos">
          Plot: <span className="spn">{movieInfo?.Plot}</span>
        </div>
      </div>
      <div onClick={()=>props.onMovieSelect()}  className="colseBtn">X</div>
      </> : "Loading..."}
    </div>
  );
};
export default MovieInfoComponent;
