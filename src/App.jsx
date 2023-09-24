/** @format */
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

function App() {
  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = "https://www.omdbapi.com/?s=movie&apikey=1ae7cf34";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  }, []);

  const handleSearch = () => {
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?t=${searchTerm}&apikey=1ae7cf34`;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setMovies(data.Error ? [] : [data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };
  return (
    <>
      <div className='main'>
        <div
          className={`loader ${IsLoading ? "showLoader" : "hideLoader"}`}></div>
        <div className={`container ${IsLoading ? "hideLoader" : "showLoader"}`}>
          <h1>Gambiz Movies</h1>
          <div className='search'>
            <input
              type='text'
              name='search'
              className='input'
              placeholder='Search for movies'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <a href='#' onClick={handleSearch}>
              <SearchIcon className='image' />
            </a>
          </div>
          <div className='banner'>
            {Movies.length == 0 ? (
              <h2>No Movies Available</h2>
            ) : (
              Movies.map((Movie) => (
                <MovieCard Movie={Movie} key={Movie.Title} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
