import React, { useState } from "react";
import Raate from "./Rate";

function FilterMove(props) {

  const handelChange = (e) => {
    props.setInput(e.target.value);
  };
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="search "
        onChange={handelChange}
        value={props.input}
      />
    </div>
  );
}

export default FilterMove;
