import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Rate } from "antd";
import { Link } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";

import "./MoveList.css";
import Addmov from "./Addmov";

function MoveList(props) {
  const [tatel, setTatel] = useState("");

  return (
    <div className="mycard">
      {props.movies
        .filter(
          (move) =>
            move.tatel.toLowerCase().includes(props.input.toLowerCase()) &&
            move.reating >= props.value
        )
        .map((move) => (
          <div key={move.id} className="cardsec">
            <Link to={`/moveApp/moveDets/${move.id}`} state={move}>
              <Card style={{ width: "18rem", height: "550px" }}>
                <Card.Img variant="top" src={move.img} />
                <Card.Body>
                  <Card.Title>{move.tatel}</Card.Title>
                  <Card.Text>{move.text}</Card.Text>
                  <Rate value={move.reating} />

                  {/* <Link to={`/moveApp/moveDet${move.id}`} state={move}></Link> */}
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default MoveList;
