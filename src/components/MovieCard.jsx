import React, { useState, useEffect } from "react";
import notFoundImage from "../images/notFound.png";
import MovieModel from "./MovieModel.jsx";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  const [imageExists, setImageExists] = useState(true);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  // Reset image when a movie changes
  useEffect(() => {
    setImageExists(true);
  }, [movie]);

  // Function to handle the error when image does not exist
  function handleImageError() {
    setImageExists(false);
  }

  // Function to open movie model
  function openMovieModal() {
    setIsMovieModalOpen(true);
  }

  // Function to close movie model
  function closeMovieModal() {
    setIsMovieModalOpen(false);
  }

  return (
    <div id="movieCard" onClick={openMovieModal}>
      {imageExists ? (
        <img
          src={movie.Poster}
          alt=""
          onError={handleImageError}
          width="100%"
          height="auto"
        />
      ) : (
        <img src={notFoundImage} alt="" display="grid" align-items="end" />
      )}

      <p>{movie.Title}</p>

      {isMovieModalOpen && (
        <MovieModel
          movie={movie}
          onClose={closeMovieModal}
          imageExists={imageExists}
        />
      )}
    </div>
  );
}

// Checking prop types
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
