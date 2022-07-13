import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./MedalP.css";
const data = [
  {
    img: (
      <svg
        className="plexico-icon-compatible-devices-26"
        version="1.1"
        id="compatible-devices"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{ enableBackground: "new 0 0 24 24" }}
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M22,3H7C6.1,3,5.4,3.5,5.1,4.3C5,4.6,5.2,4.9,5.4,5C5.7,5.1,6,4.9,6.1,4.7C6.2,4.3,6.6,4,7,4h15c0.6,0,1,0.5,1,1.1V14h-9.5
		c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H23v1.9c0,0.6-0.4,1.1-1,1.1H8.5C8.2,18,8,18.2,8,18.5S8.2,19,8.5,19H14v1h-4
		c-0.3,0-0.5,0.2-0.5,0.5S9.7,21,10,21h9c0.3,0,0.5-0.2,0.5-0.5S19.3,20,19,20h-4v-1h7c1.1,0,2-0.9,2-2.1V5.1C24,3.9,23.1,3,22,3z"
          />
          <path
            d="M3.5,10C3.8,10,4,9.8,4,9.5V9h7v5H8.5C8.2,14,8,14.2,8,14.5S8.2,15,8.5,15H11v0.5c0,0.3-0.2,0.5-0.5,0.5h-2
		C8.2,16,8,16.2,8,16.5S8.2,17,8.5,17h2c0.8,0,1.5-0.7,1.5-1.5v-8C12,6.7,11.3,6,10.5,6h-6C3.7,6,3,6.7,3,7.5v2C3,9.8,3.2,10,3.5,10
		z M4.5,7h6C10.8,7,11,7.2,11,7.5V8H4V7.5C4,7.2,4.2,7,4.5,7z"
          />
          <path
            d="M7,13.5v-1C7,11.7,6.3,11,5.5,11h-4C0.7,11,0,11.7,0,12.5v7C0,20.3,0.7,21,1.5,21h4C6.3,21,7,20.3,7,19.5V13.5
		C7,13.5,7,13.5,7,13.5C7,13.5,7,13.5,7,13.5z M1,14h5v4H1V14z M1.5,12h4C5.8,12,6,12.2,6,12.5V13H1v-0.5C1,12.2,1.2,12,1.5,12z
		 M5.5,20h-4C1.2,20,1,19.8,1,19.5V19h5v0.5C6,19.8,5.8,20,5.5,20z"
          />
        </g>
      </svg>
    ),
    tatal: "Device - Friendly",
    text: "Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.",
  },
  {
    img: (
      <svg
        className="plexico-icon-piggy-bank-25"
        version="1.1"
        id="piggy-bank"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{ enableBackground: "new 0 0 24 24" }}
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M11.5,5.5c-0.3,0-0.5,0.3-0.5,0.5c0,0.3,0.3,0.5,0.5,0.5c1.7-0.1,3.3,0.4,4.7,1.4C16.3,8,16.4,8,16.5,8
		c0.2,0,0.3-0.1,0.4-0.2c0.2-0.2,0.1-0.5-0.1-0.7C15.3,6,13.4,5.4,11.5,5.5z"
          />
          <path
            d="M24,9.5C24,9.2,23.8,9,23.5,9S23,9.2,23,9.5c0,0.7-0.4,1.2-1,1.4c-0.2-2.1-1.3-4.1-3.1-5.6c-2.4-2-5.8-2.7-9.1-2.1
		C9.2,2.4,8.5,1.9,7.6,1.6C6.5,1.4,5.4,1.5,4.5,2C4.3,2.1,4.2,2.3,4.2,2.5c0,0.2,0.1,0.3,0.2,0.4C5.2,3.3,5.7,4,5.9,4.8
		c-2,1.3-3.3,3.2-3.8,5.2H0.5C0.2,10,0,10.2,0,10.5v4C0,14.8,0.2,15,0.5,15h2.4c0.9,1.7,2.3,3,4.1,3.8V22c0,0.3,0.2,0.5,0.5,0.5
		S8,22.3,8,22v-2.7c1.2,0.5,2.6,0.7,4,0.7c1.4,0,2.8-0.3,4-0.7V22c0,0.3,0.2,0.5,0.5,0.5S17,22.3,17,22v-3.2c2.8-1.4,4.8-4,5-6.9
		C23.1,11.7,24,10.7,24,9.5z M12,19c-3.7,0-7-1.9-8.4-4.7C3.6,14.1,3.4,14,3.2,14H1v-3h1.6c0.2,0,0.5-0.2,0.5-0.4
		c0.3-2,1.6-3.9,3.7-5.1C6.9,5.3,7,5.1,7,4.9C6.8,4,6.4,3.2,5.7,2.6c0.5-0.1,1-0.1,1.5,0C8.1,2.8,8.7,3.3,9.1,4
		c0.1,0.2,0.3,0.3,0.5,0.2c3.1-0.7,6.3,0,8.6,1.8C20,7.5,21,9.4,21,11.5C21,15.6,17,19,12,19z"
          />
          <path d="M6,9c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S6.6,9,6,9z M6,10C6,10,6,10,6,10V9.5V10z" />
          <path
            d="M12,9.5c0.6,0,1,0.4,1,1c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-0.9-0.6-1.7-1.5-1.9V8c0-0.3-0.2-0.5-0.5-0.5
		S11.5,7.7,11.5,8v0.6c-0.9,0.2-1.5,1-1.5,1.9c0,1.1,0.9,2,2,2c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-0.3-0.2-0.5-0.5-0.5
		S10,13.2,10,13.5c0,0.9,0.6,1.7,1.5,1.9V16c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5v-0.6c0.9-0.2,1.5-1,1.5-1.9c0-1.1-0.9-2-2-2
		c-0.6,0-1-0.4-1-1S11.4,9.5,12,9.5z"
          />
        </g>
      </svg>
    ),
    tatal: "Always 100% Free",
    text: "Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.",
  },
  {
    img: (
      <svg
        className="plexico-icon-movie-titles-24"
        version="1.1"
        id="movie-titles"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{ enableBackground: "new 0 0 24 24" }}
        xmlSpace="preserve"
      >
        <g id="New_icons_1_"></g>
        <g>
          <path
            d="M23.5,0h-20C3.2,0,3,0.2,3,0.5V4H0.5C0.2,4,0,4.2,0,4.5v19C0,23.8,0.2,24,0.5,24h19c0.3,0,0.5-0.2,0.5-0.5V21h3.5
		c0.3,0,0.5-0.2,0.5-0.5v-20C24,0.2,23.8,0,23.5,0z M19,23H1V5h2v15.5C3,20.8,3.2,21,3.5,21H19V23z M23,20H4V1h19V20z"
          />
          <path
            d="M10.5,18c0.3,0,0.5-0.2,0.5-0.5V17h5v0.5c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V17v-1v-3v-1V9V8V5V4V3.5
		C17,3.2,16.8,3,16.5,3S16,3.2,16,3.5V4h-5V3.5C11,3.2,10.8,3,10.5,3S10,3.2,10,3.5V4v1v3v1v3v1v3v1v0.5C10,17.8,10.2,18,10.5,18z
		 M11,5h5v3h-5V5z M11,9h5v3h-5V9z M11,13h5v3h-5V13z"
          />
          <rect x={18} y={8} width={1} height={1} />
          <rect x={18} y={10} width={1} height={1} />
          <rect x={18} y={12} width={1} height={1} />
          <rect x={8} y={8} width={1} height={1} />
          <rect x={18} y={6} width={1} height={1} />
          <rect x={18} y={4} width={1} height={1} />
          <rect x={8} y={6} width={1} height={1} />
          <rect x={8} y={4} width={1} height={1} />
          <rect x={8} y={10} width={1} height={1} />
          <rect x={8} y={12} width={1} height={1} />
          <rect x={8} y={14} width={1} height={1} />
          <rect x={8} y={16} width={1} height={1} />
          <rect x={18} y={14} width={1} height={1} />
          <rect x={18} y={16} width={1} height={1} />
          <path d="M6.5,18C6.8,18,7,17.8,7,17.5v-14C7,3.2,6.8,3,6.5,3S6,3.2,6,3.5v14C6,17.8,6.2,18,6.5,18z" />
          <path d="M20.5,18c0.3,0,0.5-0.2,0.5-0.5v-14C21,3.2,20.8,3,20.5,3S20,3.2,20,3.5v14C20,17.8,20.2,18,20.5,18z" />
        </g>
      </svg>
    ),
    tatal: "Thousands of Titles",
    text: "Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.",
  },
];
function MedalP() {
  return (
    <div className="medel">
      {data.map((dat, i) => (
        <div className="msd">
          <Card className="cardd" style={{ width: "20rem" , height: "250px" }} key={i} dat={dat}>
            {dat.img}
            <Card.Body>
              <Card.Title>{dat.tatal}</Card.Title>
              <Card.Text><p>{dat.text}</p></Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MedalP;
