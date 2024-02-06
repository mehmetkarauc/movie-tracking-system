import React from "react";
import Search from "./Search";
import GenreFilter from "./GenreFilter";
import PropTypes from "prop-types";

function Header({ filteredMovies, onSearchInputChange, onGenreSelectChange }) {
  return (
    <div id="header">
      <Search onSearchInputChange={onSearchInputChange} />

      <GenreFilter
        filteredMovies={filteredMovies}
        onGenreSelectChange={onGenreSelectChange}
      />
    </div>
  );
}

// Checking prop types
Header.propTypes = {
  filteredMovies: PropTypes.array.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onGenreSelectChange: PropTypes.func.isRequired,
};

export default Header;
