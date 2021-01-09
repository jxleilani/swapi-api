import Axios from "axios";
import React, { useState } from "react";


function Starship({ item }) {
  const [hide, setHide] = useState(true);

  const handleViewPilots = () => {
    setHide(!hide);
    getPilots();
  };

  const handleClose = () => {
    setHide(!hide);
  };

  const getPilots = () => {
      item.pilots.forEach((pilot) => {
        Axios.get(pilot)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      });
  };

  return (
    <div className="ship">
      <p>{item.name}</p>
      <button onClick={handleViewPilots}>View Pilots</button>
      <div className={hide ? "pilots hide" : "pilots"}>
        {item.pilots}
        <button className="btn-close" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Starship;
