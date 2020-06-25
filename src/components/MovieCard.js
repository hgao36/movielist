import React from "react";
import "./Movie.css";

const imgPrefix = "https://image.tmdb.org/t/p/w500/";

const MovieCard = (props) => {
  const imgSrc = imgPrefix + props.poster_path;
  if (!props.liked && !props.blocked) {
    return (
      <div className="moviecard">
        <img className="poster" src={imgSrc} alt="none" />
        <div className="title">{props.title}</div>
        <div className="release_date">release_date:{props.release_date}</div>
        <span className="vote_average">
          vote_average:{props.vote_average}____
        </span>
        <span className="vote_count">vote_count:{props.vote_count}</span>
        <br />
        <button className="like" onClick={props.handleLike}>
          like
        </button>
        <button className="block" onClick={props.handleBlock}>
          block
        </button>
        <div className="overview">{props.overview}</div>
      </div>
    );
  } else if (props.liked) {
      return (
        <div className="moviecard">
        <img className="poster" src={imgSrc} alt="none" />
        <div className="title">{props.title}</div>
        <div className="release_date">release_date:{props.release_date}</div>
        <span className="vote_average">
          vote_average:{props.vote_average}____
        </span>
        <span className="vote_count">vote_count:{props.vote_count}</span>
        <br />
        <button className="delete" onClick={props.handleDelete}>
          delete
        </button>
        <button className="block" onClick={props.handleBlock}>
          block
        </button>
        <div className="overview">{props.overview}</div>
      </div>
      )
  } else if (props.blocked) {
      return (
        <div className="moviecard">
        <img className="poster" src={imgSrc} alt="none" />
        <div className="title">{props.title}</div>
        <div className="release_date">release_date:{props.release_date}</div>
        <span className="vote_average">
          vote_average:{props.vote_average}____
        </span>
        <span className="vote_count">vote_count:{props.vote_count}</span>
        <br />
        <button className="delete" onClick={props.handleDelete}>
          delete
        </button>
        <button className="like" onClick={props.handleLike}>
          like
        </button>
        <div className="overview">{props.overview}</div>
      </div>
      )
  }
};

export default MovieCard;