import React, { useState } from "react";
import movies from "../data/movies.json";
import Title from "../components/Title";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const moviesPerPage = 36;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  // Function to filter movies based on search query and selected genre
  const filteredMovies = movies.filter((movie) => {
    const titleMatches =
      typeof movie.Title === "string" &&
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase());

    const genreMatches =
      selectedGenre === "" || movie.Genre.includes(selectedGenre);

    return titleMatches && genreMatches;
  });

  // Calculate the current movie list for the current page
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  // Function to update page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle search input change
  function handleSearchInputChange(e) {
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  }

  // Function to handle genre selection change
  function handleGenreSelectChange(e) {
    setCurrentPage(1);
    setSelectedGenre(e.target.value);
  }

  return (
    <div id="dashboard">
      <Title />

      <Header
        filteredMovies={filteredMovies}
        onSearchInputChange={handleSearchInputChange}
        onGenreSelectChange={handleGenreSelectChange}
      />

      <MovieList currentMovies={currentMovies} />

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={filteredMovies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Dashboard;
