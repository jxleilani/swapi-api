import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Pilot from "../components/Pilot";

function Starship({ item }) {
  const [hide, setHide] = useState(true);
  // eslint-disable-next-line
  const [pilots, setPilots] = useState([]);

  const pilotArr = [];
  
  useEffect(() => {
    item.pilots.forEach((pilot) => {
      Axios.get(pilot)
      .then(res => pilotArr.push(res.data.name))
      .then(() => {
        console.log(pilotArr);
      })
      .then(() => setPilots(pilotArr))
      .then(() => console.log(pilot))
      .catch(err => console.log(err));
    });
    // eslint-disable-next-line
  },[]);

  const handleViewPilots = () => {
    setHide(!hide);
    // getPilots();
  };

  const handleClose = () => {
    setHide(!hide);
  };

  return (
    <div className="ship">
      <p>{item.name}</p>
      <button onClick={handleViewPilots}>View Pilots</button>
        <div className={hide ? "pilots hide" : "pilots"}>
          <p>Help</p>
          <p>{pilots.join(", ")}</p>
        <button className="btn-close" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Starship;
