import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Pilot from "../components/Pilot";

function Starship({ item }) {
  const [hide, setHide] = useState(true);
  // eslint-disable-next-line
  const [pilots, setPilots] = useState([]);

  const pilotArr = [];

  const noResults = `Sorry, there were no pilots for ${item.name}! Please try another.`;

  useEffect(() => {
    item.pilots.forEach((pilot) => {
      // Issue with deployed link and http vs https error. However, the code below is not fully working.
      // let fixUrl = pilot.split("");
      // fixUrl.splice(4, 0, "s");
      // fixUrl.join("");
      // pass fixUrl into line 22

      Axios.get(pilot)
        .then((res) => pilotArr.push(res.data.name))
        .then(() => setPilots(pilotArr))
        .catch((err) => console.log(err));
    });
    // eslint-disable-next-line
  }, []);

  const handleViewPilots = () => {
    setHide(!hide);
  };

  const handleClose = () => {
    setHide(!hide);
  };

  return (
    <div className="ship">
      <p>{item.name}</p>
      <button onClick={handleViewPilots}>View Pilots</button>
      <div className={hide ? "pilots hide" : "pilots"}>
        <p>{pilots ? pilots.join(", ") : noResults}</p>
        <button className="btn-close" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Starship;
