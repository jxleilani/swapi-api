import React, { useState } from 'react'

function Starship({ item }) {
  const [hide, setHide] = useState(true);

  const handleViewPilots = () => {
    setHide(!hide);
  };

  return (
    <div className="ship">
      <p>
        {item.name}
      </p>
      <button onClick={handleViewPilots}>View Pilots</button>
      <div className={hide ? "pilots hide" : "pilots"}>
        {item.pilots}
      </div>
    </div>
  )
}

export default Starship
