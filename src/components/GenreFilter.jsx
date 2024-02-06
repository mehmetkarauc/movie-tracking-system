import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function GenreFilter({ filteredMovies, onGenreSelectChange }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genreList, setGenreList] = useState([]);

  // Get a list of all the genres
  useEffect(() => {
    const tempList = [];

    filteredMovies.forEach((movie) => {
      const genres = movie.Genre.split("|");

      genres.forEach((genre) => {
        if (!tempList.includes(genre) && genre !== "") {
          tempList.push(genre);
        }
      });
    });

    setGenreList(tempList);
  }, [filteredMovies]);

  // Function to update the selected genre
  function handleSelectChange(e) {
    setSelectedGenre(e.target.value);
    onGenreSelectChange(e);
  }

  return (
    <div id="genreFilter">
      <select value={selectedGenre} onChange={handleSelectChange}>
        <option value="">All</option>

        {genreList.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

// Checking prop types
GenreFilter.propTypes = {
  filteredMovies: PropTypes.array.isRequired,
  onGenreSelectChange: PropTypes.func.isRequired,
};

export default GenreFilter;
