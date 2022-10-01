import React from "react";
import { movies } from "../data";

function Movies() {

const movieInfo=movies.map((movie)=>

  <div key={movie.title}>
    
    <h4>Name: {movie.title}</h4>
    <p>Time:{movie.time}</p>
    <ul>
      <h3>Genres</h3>
  
      {movie.genres.map((genre)=>
      <li key={genre}>

        {genre}

      </li>
      
      
      )}
    </ul>
  </div>
)
  return (
  <div>
  <h1>Movies Page</h1>
  <div>{movieInfo}</div>
  
  </div>
  )
}

export default Movies;
