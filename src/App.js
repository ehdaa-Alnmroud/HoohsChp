import Mynav from "./moveApp/Mynav";
import MedalP from "./moveApp/MedalP";
import MoveList from "./moveApp/MoveList";
import FilterMove from "./moveApp/FilterMove";
import Raate from "./moveApp/Rate";
import Addmov from "./moveApp/Addmov";
import Foooter from "./moveApp/Foooter";
import Proud from "./moveApp/Proud";

import "./App.css";
import React, { useState } from "react";

function App() {
  const [visibility, setvisibility] = useState(false);
  const [movies, setMovies] = useState([
    {
      img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/07/26/project-power-movie-HD-Posters-.jpg?quality=80&zoom=1&ssl=1",
      tatel: "Project Power",
      reating: 5,
    },
    {
      img: "https://i.pinimg.com/originals/4f/8c/66/4f8c66ec27d01515828b23aff61759d0.jpg",
      tatel: "us ",
      reating: 4,
    },
    {
      img: "https://comic-cons.xyz/wp-content/uploads/marvel-cinematic-universe-spiderman-far-from-home-movie-poster-203x300.jpg",
      tatel: "spiderman",
      reating: 3,
    },
    {
      img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/05/22/the-old-guard-movie-HD-Poster-.jpg?quality=80&zoom=1&ssl=1",
      tatel: "the old guard",
      reating: 1,
    },
    {
      img: "https://w0.peakpx.com/wallpaper/40/771/HD-wallpaper-atlantis-the-lost-empire-disney-animated-movies-movie-poster.jpg",
      tatel: "the lost empire",
      reating: 2,
    },
  ]);

  const [input, setInput] = useState("");
  const [value, setValue] = useState(1);
  const handelChange = () => setvisibility(!visibility);

  return (
    <div className="App">
      <Mynav />
      <MedalP />
      <Raate value={value} setValue={setValue} />
      <FilterMove setInput={setInput} input={input} />
      <Addmov movies={movies} setMovies={setMovies} />
      <MoveList movies={movies} input={input} value={value} />
<Proud/>
      <Foooter />
    </div>
  );
}

export default App;
