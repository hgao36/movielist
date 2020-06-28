import React, { Component, useState } from "react";
import MovieCard from './MovieCard';
import {connect} from 'react-redux'
import axios from 'axios'
import {initListAction} from '../action/actions'
import "./MovieList.css";

function MovieList(props) {
   console.log("store value, movie_list, liked, blocked and number")
   console.log(props.movie_list)
   console.log(props.movies_liked)
   console.log(props.movies_blocked)
   console.log(props.page_number)
  
  const [film, setFilm] = useState(props.movie_list);
  const card = film.map((movie) => (
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
  return (
    <div class="main-movieList">
      <div>
        <button class="previousPage">Previous</button>
        <form>
          <label>Page &nbsp;</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="500"
            disabled
          ></input>
        </form>
        <button class="nextPage">Next</button>
      </div>
      <button onClick={sortbyname}>SortByname</button>
      <button onClick={sortbycount}>Sort by vote count</button>
      <button onClick={sortbyavg}>Sort by vote average</button>
      <button onClick={props.fetchAllMovies}>FetchMovieTest</button>
      <div class="grid-container">{card}</div>
    </div>
  );
}


const mapStateToProps = (state) =>{
  return{
      movie_list: state.movie_list,
      movies_liked: state.movies_liked,
      movies_blocked: state.movies_blocked,
      page_number: state.page_number
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchAllMovies(){
    console.log("fetched")
    const page_current = 1
    const API_KEY="adbe3118bf475a31215c5e428fb035ce"
    const URL = 
    "https://api.themoviedb.org/3/discover/movie?api_key=" 
    + 
    API_KEY 
    + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + 
    page_current;  
    axios(URL).then(data =>{
        let total_movies = data.data.results
        const action = initListAction(total_movies)
        dispatch(action)
        console.log("action now")
        console.log(action)
        dispatch(action)
    })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);


