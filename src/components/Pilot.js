import React from "react";

function Pilot({ pilots }) {
  return <p>Hello {pilots.join(", ")}</p>;
}

export default Pilot;
