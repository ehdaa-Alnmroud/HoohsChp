import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Rate } from "antd";

import "./MoveList.css";
import Addmov from "./Addmov";

function MoveList(props) {
  return (
    <div className="mycard">
      {props.movies
        .filter(
          (move) =>
            move.tatel.toLowerCase().includes(props.input.toLowerCase()) &&
            move.reating >= props.value
        )
        .map((move, i) => (
          <div key={i} className="cardsec">
            <Card style={{ width: "18rem", height: "550px" }}>
              <Card.Img variant="top" src={move.img} />
              <Card.Body>
                <Card.Title>{move.tatel}</Card.Title>
                <Card.Text>{move.text}</Card.Text>
                <Rate value={move.reating} />
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default MoveList;
