import React, { Component } from 'react';
import getStarships from './utils/API';
import Starship from './Starship';

class Starships extends Component {
  state = {
    starships: []
  }

  componentDidMount() {
    getStarships()
      .then((res) => {
        this.setState({ starships: res.data.results });
        console.log(this.state.starships);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="starships-box">
        {this.state.starships.map(item => (
          <Starship key={item.name} item={item} />
        ))}
        
      </div>
    )
  }
}

export default Starships
