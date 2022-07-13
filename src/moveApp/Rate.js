import React, { useState } from "react";
import { Rate } from "antd";

function Raate(props) {
//   const [value, setValue] = useState(3);

  return (
    <div className="rate">
      <Rate onChange={props.setValue} value={props.value} />
    </div>
  );
}

export default Raate;
