/** @format */

import React from "react";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";

const MovieCard = ({ Movie }) => {
  return (
    <div className='holder'>
      <div className='img'>
        <img
          src={
            Movie.Poster !== "" && Movie.Poster !== "N/A"
              ? Movie.Poster
              : "https://placehold.co/400"
          }
          alt={Movie.Title}
        />
      </div>
      <div className='title'>
        <h3>{Movie.Title}</h3>
      </div>
      <div className='rating'>
        <p>
          <StarIcon className='span' />
          <span className='rate'>
            {Movie.imdbRating ? Movie.imdbRating : "N/A"}
          </span>
        </p>
        <p>
          <PlaceIcon style={{ color: "red" }} />
          <span className='span'>{Movie.Country ? Movie.Country : "N/A"}</span>
        </p>
        <p>{Movie.Language ? Movie.Language : "N/A"}</p>
      </div>
      <div className='plot'>
        <p>{Movie.Plot ? Movie.Plot : "N/A"}</p>
      </div>
    </div>
  );
};

export default MovieCard;
