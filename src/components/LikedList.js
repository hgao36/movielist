import React, { Component } from "react";
import store from "../store/index";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const LikedList = () => {
  const lists = store.getState();
  console.log(lists.movies_liked);
  return (
    <div class="main-movieList">
      <div>This is the Liked List.</div>
      {/* <div class="grid-container">
        {lists.movies_liked.map((movie) => (
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

export default LikedList;