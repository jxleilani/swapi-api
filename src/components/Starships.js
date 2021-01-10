import React, { Component } from "react";
import getStarships from "./utils/API";
import Starship from "./Starship";

class Starships extends Component {
  state = {
    starships: [],
  };

  componentDidMount() {
    getStarships()
      .then((res) => {
        this.setState({ starships: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="starships-box">
        <div className="force">
          <div className="clip">
            <h2>May the Force be with you!</h2>
          </div>
          <p>Click on View Pilots to see who has piloted each starship.</p>
        </div>
        {this.state.starships.map((item) => (
          <Starship
            key={item.name}
            item={item}
            name={item.name}
            pilots={item.pilots}
          />
        ))}
      </div>
    );
  }
}

export default Starships;
