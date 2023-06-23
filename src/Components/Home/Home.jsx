import React from "react";
import Movies from "../Movies/Movies";
import "./Home.css";
import movies from "../../movie.json";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="container-name">
          <h1>Batman</h1>
        </div>
        <div className="Movie">
          {movies.map((e) => {
            return <Movies title={e.Title} year={e.Year} img={e.Poster} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
