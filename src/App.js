import Mynav from "./moveApp/Mynav";
import MedalP from "./moveApp/MedalP";
import MoveList from "./moveApp/MoveList";
import FilterMove from "./moveApp/FilterMove";
import Raate from "./moveApp/Rate";
import Addmov from "./moveApp/Addmov";
import Foooter from "./moveApp/Foooter";
import Proud from "./moveApp/Proud";
import MoveDet from "./moveApp/moveDet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import React, { useState } from "react";

function App() {
  const [visibility, setvisibility] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/07/26/project-power-movie-HD-Posters-.jpg?quality=80&zoom=1&ssl=1",
      tatel: "Project Power",
      reating: 5,
      trailer: "https://www.youtube.com/embed/xw1vQgVaYNQ",
      story:
        "when a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a teenage dealer and a local cop must team with an ex-soldier to take down the ",
    },

    {
      id: 2,
      img: "https://i.pinimg.com/originals/4f/8c/66/4f8c66ec27d01515828b23aff61759d0.jpg",
      tatel: "us ",
      reating: 4,
      trailer: "https://www.youtube.com/embed/hNCmb-4oXJA",
      story:
        "The Us film follows Adelaide  a wife and mother to two children who is haunted by an event in her childhood where she found a doppelganger of herself inside a House of Mirrors",
    },
    // {
    //   img: "https://comic-cons.xyz/wp-content/uploads/marvel-cinematic-universe-spiderman-far-from-home-movie-poster-203x300.jpg",
    //   tatel: "spiderman",
    //   reating: 3,
    // },
    // {
    //   img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/05/22/the-old-guard-movie-HD-Poster-.jpg?quality=80&zoom=1&ssl=1",
    //   tatel: "the old guard",
    //   reating: 1,
    // },
    // {
    //   img: "https://w0.peakpx.com/wallpaper/40/771/HD-wallpaper-atlantis-the-lost-empire-disney-animated-movies-movie-poster.jpg",
    //   tatel: "the lost empire",
    //   reating: 2,
    // },
  ]);

  const [input, setInput] = useState("");
  const [value, setValue] = useState(1);
  const handelChange = () => setvisibility(!visibility);

  return (
    <Router>
      <div className="App">
        <Mynav />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <MedalP />
                <Raate value={value} setValue={setValue} />
                <FilterMove setInput={setInput} input={input} />
                <Addmov movies={movies} setMovies={setMovies} />
                <MoveList movies={movies} input={input} value={value} />
              </>
            }
          />
          <Route
            path="/moveApp/moveDets/:id"
            element={<MoveDet movies={movies} />}
          />
        </Routes>
        {/* 
        <Proud /> */}
        <Foooter />
      </div>
    </Router>
  );
}

export default App;
