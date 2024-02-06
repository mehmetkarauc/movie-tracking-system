import React, { useState } from "react";
import PropTypes from "prop-types";

function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalMovies / moviesPerPage);
  const maxPagesToShow = 20;
  const totalPageSets = Math.ceil(totalPages / maxPagesToShow);
  const [currentSet, setCurrentSet] = useState(1);
  const pageNumbers = [];

  // Loop to calculate the page numbers for the current page set
  for (
    let i = (currentSet - 1) * maxPagesToShow + 1;
    i <= Math.min(currentSet * maxPagesToShow, totalPages);
    i++
  ) {
    pageNumbers.push(i);
  }

  // Function change the page number
  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  }

  // Function to change to the next page set
  function goToNextSet() {
    setCurrentSet(Math.min(currentSet + 1, totalPageSets));
  }

  // Function to change to the previous page set
  function goToPreviousSet() {
    setCurrentSet(Math.max(currentSet - 1, 1));
  }

  return (
    <div id="pagination">
      <button
        className="primaryButton"
        onClick={goToPreviousSet}
        disabled={currentSet === 1}
      >
        Previous
      </button>

      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <a href="#!" onClick={() => goToPage(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="primaryButton"
        onClick={goToNextSet}
        disabled={currentSet === totalPageSets}
      >
        Next
      </button>
    </div>
  );
}

// Checking prop types
Pagination.propTypes = {
  moviesPerPage: PropTypes.number.isRequired,
  totalMovies: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
