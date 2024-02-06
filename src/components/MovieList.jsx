import React from "react";
import MovieCard from "./MovieCard.jsx";
import PropTypes from "prop-types";

function MovieList({ currentMovies }) {
  return (
    <div id="movieList">
      {currentMovies.map((movie, index) => (
        <div key={index}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

// Checking prop types
MovieList.propTypes = {
  currentMovies: PropTypes.array.isRequired,
};

export default MovieList;
