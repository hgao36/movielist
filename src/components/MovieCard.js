import React from "react";
import "./MovieCard.css";

const imgPrefix = "https://image.tmdb.org/t/p/w500/";

const MovieCard = (props) => {
  const imgSrc = imgPrefix + props.poster_path;
  if (!props.liked && !props.blocked) {
    return (
      <div className="moviecard grid-item">
        <img className="poster" src={imgSrc} alt="none" />
        <div className="title">
          <strong>{props.title}</strong>
        </div>
        <div className="release_date">
          Release Date:&nbsp;{props.release_date}
        </div>
        <span className="vote_average">
          Vote Average:&nbsp;{props.vote_average} &nbsp; &nbsp;
        </span>
        <span className="vote_count">Vote Count:&nbsp;{props.vote_count}</span>
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
      <div className="moviecard grid-item">
        <img className="poster" src={imgSrc} alt="none" />
        <div className="title">
          <strong>{props.title}</strong>
        </div>
        <div className="release_date">
          Release Date:&nbsp;{props.release_date}
        </div>
        <span className="vote_average">
          Vote Average:&nbsp;{props.vote_average} &nbsp; &nbsp;
        </span>
        <span className="vote_count">Vote Count:&nbsp;{props.vote_count}</span>
        <br />
        <button className="delete" onClick={props.handleDelete}>
          unlike
        </button>
        <button className="block" onClick={props.handleBlock}>
          block
        </button>
        <div className="overview">{props.overview}</div>
      </div>
    );
  } else if (props.blocked) {
    return (
      <div className="moviecard grid-item">
        <img className="poster" src={imgSrc} alt="none" />
        <div className="title">
          <strong>{props.title}</strong>
        </div>
        <div className="release_date">
          Release Date:&nbsp;{props.release_date}
        </div>
        <span className="vote_average">
          Vote Average:&nbsp;{props.vote_average} &nbsp; &nbsp;
        </span>
        <span className="vote_count">Vote Count:&nbsp;{props.vote_count}</span>
        <br />
        <button className="delete" onClick={props.handleDelete}>
          delete
        </button>
        <button className="like" onClick={props.handleLike}>
          like
        </button>
        <div className="overview">{props.overview}</div>
      </div>
    );
  }
};

export default MovieCard;
