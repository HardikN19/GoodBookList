import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Motivational: [
    { name: "The pursuit of Happyness", rating: "4/5" },
    { name: "The Social Network", rating: "4.5/5" },
    { name: "Into the wild", rating: "4/5" }
  ],

  comedy: [
    {
      name: "Welcome",
      rating: "3.5/5"
    },
    {
      name: "Golmal",
      rating: "4/5"
    },
    {
      name: "Dhamaal",
      rating: "4.5/5"
    }
  ],
  horror: [
    {
      name: "IT",
      rating: "4/5"
    },
    {
      name: "Conjuring",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 Movie Time 🎥 </h1>
      <p> Here are my favorite movies.</p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div className="list">
        <ul>
          {movieDB[selectedGenre].map((movie) => (
            <li>
              {" "}
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
