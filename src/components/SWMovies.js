import React, { useState, useEffect } from "react";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    async function getSwapiData() {
      const response = await fetch(`https://swapi.co/api/films/${number}`);
      const data = await response.json();
      setMovie(data.title);
    }
    getSwapiData();
  }, [number]);

  return (
    <div>
      <h1>Pick A movie </h1>
      <select value={number} onChange={handleNumberChange}>
        {[1, 2, 3, 4, 5, 6, 7].map((movieNumber, index) => (
          <option key={index} value={movieNumber}>
            {movieNumber}
          </option>
        ))}
      </select>
      <pre>You choosed: {movie}</pre>
    </div>
  );
}

export default SWMovies;
