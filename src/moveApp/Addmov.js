import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Addmov(props) {
  const [img, setImg] = useState("");
  const [tatel, setTatel] = useState("");
  const [reating, setReating] = useState();

  const addMov = () => {
    props.setMovies([
      ...props.movies,
      {
        img,
        tatel,
        reating,
      },
    ]);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="addMo">
      <Button className="mybott" variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bla" closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bla">
          <span style={{ margin: "30px" }}>movie poster Url</span>
          <input
            className="myinput"
            type="text"
            onChange={(event) => setImg(event.target.value)}
          />
          <br></br>
          <span style={{ margin: "43px" }}>movie name</span>
          <input
            className="myinput"
            type="text"
            onChange={(event) => setTatel(event.target.value)}
          />
          <br></br>
          <span style={{ margin: "42px" }}>movie rating</span>
          <input
            className="myinput"
            type="text"
            onChange={(event) => setReating(event.target.value)}
          />
          <br></br>
        </Modal.Body>
        <Modal.Footer className="bla">
          <Button className="mybott" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="mybott" variant="primary" onClick={addMov}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addmov;
