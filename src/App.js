import "./App.css";
import Header from "./Components/Header/Header";
import MovieComponent from "./Components/MovieComponent/MovieComponent";
import { useState } from "react";
import Axios from "axios";
import MovieIcon from "./img/movie-icon.svg";
import MovieInfoComponent from "./Components/MovieInfoComponent/MovieInfoComponent";

export const API_KEY = "eeba0f9a";

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );

    updateMovieList(response.data.Search);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <div className="App">
      <Header textChange={onTextChange} values={searchQuery} />
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className="ComponentAlignment">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : ( <div className="homeInfo">
             <img className="homeIcon"  src={MovieIcon} alt="icon"/>
             <h3>Please Start Searching For Movies...</h3>
             </div>) 
        }
      </div>
    </div>
  );
}

export default App;
