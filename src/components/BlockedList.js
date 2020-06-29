import React, { Component } from "react";
import store from "../store/index";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const BlockedList = () => {
  const lists = store.getState();
  console.log(lists.movies_blocked);
  return (
    <div class="main-movieList">
      <div>This is the Blocked List.</div>
      {/* <div class="grid-container">
        {lists.movies_blocked.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            overview={movie.overview}
          />
        ))}
      </div> */}
    </div>
  );
};

export default BlockedList;
