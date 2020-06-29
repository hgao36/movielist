import React, { Component, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import axios from "axios";
import { initListAction } from "../action/actions";
import "./MovieList.css";

let page_current = 1;
const API_KEY = "adbe3118bf475a31215c5e428fb035ce";
const URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  API_KEY +
  "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=";

function MovieList(props) {
  const [film, setFilm] = useState();
  let card;
  if (!film) {
    card = "loading... ...";
  } else {
    card = film
      .filter((mov) => !mov.blocked)
      .map((movie) => (
        <MovieCard
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
          overview={movie.overview}
          liked={movie.liked}
          blocked={movie.blocked}
        />
      ));
  }

  const sortbyname = () => {
    const temp = [...film];
    temp.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setFilm(temp);
  };

  const sortbycount = () => {
    const temp = [...film];
    temp.sort(function (a, b) {
      return b.vote_count - a.vote_count;
    });
    setFilm(temp);
  };

  const sortbyavg = () => {
    const temp = [...film];
    temp.sort(function (a, b) {
      return b.vote_average - a.vote_average;
    });
    setFilm(temp);
  };

  const fetchdata = () => {
    axios(URL + page_current).then((data) => {
      let temp = data.data.results;
      temp = temp.map((mov) => {
        return { ...mov, liked: false, blocked: false };
      });
      const total_movies = temp;
      setFilm(total_movies);
      props.updateStore(total_movies);
      props.addPageNumber();
    });
  };

  useEffect(fetchdata, [1]);

  const turnNext = () => {
    page_current += 1;
    if (page_current > props.page_number) {
      fetchdata();
    } else {
      setFilm(props.movie_list[page_current - 1]);
    }
  };

  const turnPrev = () => {
    if (page_current <= 1) {
      page_current = 1;
    } else {
      page_current -= 1;
    }
    if (page_current > props.page_number) {
      fetchdata();
    } else {
      setFilm(props.movie_list[page_current - 1]);
    }
  };

  return (
    <div class="main-movieList">
      <div class="pagination">
        <button class="previousPage" onClick={turnPrev}>
          Previous
        </button>
        <label>Page &nbsp;</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="500"
          value={page_current}
          disabled
        ></input>
        <button class="nextPage" onClick={turnNext}>
          Next
        </button>
      </div>
      <div class="sort-buttons">
        <button onClick={sortbyname}>SortByname</button>
        <button onClick={sortbycount}>Sort by vote count</button>
        <button onClick={sortbyavg}>Sort by vote average</button>
      </div>
      <div class="grid-container">{card}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movie_list: state.movie_list,
    movies_liked: state.movies_liked,
    movies_blocked: state.movies_blocked,
    page_number: state.page_number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: (total_movies) => {
      const action = initListAction(total_movies);
      dispatch(action);
    },

    addPageNumber: () => {
      dispatch({ type: "addPageNumber" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
