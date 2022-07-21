import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function MoveDet(props) {
  const [move, setmovi] = useState({});
  const params = useParams();
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    setmovi(props.movies.find((move) => move.id === +params.id));
  }, [props.movies, params.id]);
  // const move = location.state;

  return (
    <div>
      <div className="detd">
        <iframe
          
          width="527"
          height="309"
          src={move.trailer}
          title={move.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <h5>
          {" "}
          <span>the movie story:</span> {move.story}
          <br></br>
        </h5>

        <br />
      </div>
      <div>
        <br></br>
      </div>
      <Button
        className="mybott "
        variant="secondary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </div>
  );
}

export default MoveDet;
