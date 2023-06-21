import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => setMovie(movies));
  }, []);

  const all_movies = movie.map(film => {
    return(
      <div>
        <ul>
          <h1>{film.title}</h1>
          <p>{film.description}</p>
        </ul>
      </div>
    )
  })

  return <div className="movies">{all_movies}</div>;
}

export default App;
