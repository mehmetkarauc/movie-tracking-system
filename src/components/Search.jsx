import React from "react";
import PropTypes from "prop-types";

function Search({ onSearchInputChange }) {
  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search movies..."
        onChange={onSearchInputChange}
      />
    </div>
  );
}

// Checking prop types
Search.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
};

export default Search;
