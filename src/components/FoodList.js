import React, { Component } from 'react';
import Food from './Food';
import axios from 'axios';

class FoodList extends Component {
  state = {
    food: [],
  }

  componentWillMount() {
    axios.get('http://localhost:3001/9gag')
    .then(response => this.setState({ food: response.data }))
    .catch(err => console.log(err));
  }

  renderFood() {
    console.log(this.state);
    return this.state.food.map(food =>
      <Food key={food.title} food={food} />
    );
  }

  render() {
    return (
      <div className="gag">
        <div className="wrapper">
          {this.renderFood()}
        </div>
      </div>
    );
  }
}

export default FoodList;
