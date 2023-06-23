import React from "react";
import "./Movies.css";

const Movies = (props) => {
  return (
    <div className="movie-card">
      <img src={props.img} alt="poster" />
      <p> {props.title} </p>
      <p> {props.year} </p>
    </div>
  );
};

export default Movies;
