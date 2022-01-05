import React, { useEffect, useState } from "react";
import "./MovieInfoComponent.css";
import CrossIcon from "../../img/Cross.png"
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
          IMDB Rating: <span className="spn">{movieInfo?.imdbRating}</span>
        </span>
        <span className="Infos">
          Year: <span className="spn">{movieInfo?.Year}</span>
        </span>
        <span className="Infos">
          Language: <span className="spn">{movieInfo?.Language}</span>
        </span>
        <span className="Infos">
          Rated: <span className="spn"> {movieInfo?.Rated}</span>
        </span>
        <span className="Infos">
          Release: <span className="spn">{movieInfo?.Released}</span>
        </span>
        <span className="Infos">
          Runtime: <span className="spn">{movieInfo?.Runtime}</span>
        </span>
        <span className="Infos">
          Genre: <span className="spn">{movieInfo?.Genre}</span>
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
      <div onClick={()=>props.onMovieSelect()} className="closeSection" ><img className="colseBtn" src={CrossIcon}/></div>
      </> : "Loading..."}
    </div>
  );
};
export default MovieInfoComponent;
