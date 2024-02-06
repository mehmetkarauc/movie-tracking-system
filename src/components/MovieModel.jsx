import React from "react";
import PropTypes from "prop-types";
import notFoundImage from "../images/notFound.png";

function MovieModal({ movie, onClose, imageExists }) {
  function stopPropagation(e) {
    e.stopPropagation();
  }

  return (
    <div id="movieModel" onClick={onClose}>
      <div onClick={stopPropagation}>
        <button className="secondaryButton" onClick={onClose}>
          X
        </button>

        <img
          src={imageExists ? movie.Poster : notFoundImage}
          alt=""
          width="400px"
          height="500px"
        />

        <h4>{movie.Title}</h4>
        <p>Genre: {movie.Genre}</p>
        <p>IMDb Score: {movie["IMDB Score"]}</p>
        <a href={movie["Imdb Link"]} target="_blank" rel="noopener noreferrer">
          IMDb Link
        </a>
      </div>
    </div>
  );
}

// Checking prop types
MovieModal.propTypes = {
  movie: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  imageExists: PropTypes.bool.isRequired,
};

export default MovieModal;
