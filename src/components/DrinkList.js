import React, { Component } from 'react';
import Drink from './Drink';
import axios from 'axios';

class DrinkList extends Component {
  state = {
    drink: [],
  }

  componentWillMount() {
    axios.get('http://localhost:3001/9gag')
    .then(response => this.setState({ drink: response.data }))
    .catch(err => console.log(err));
  }

  renderDrink() {
    console.log(this.state);
    return this.state.drink.map(drink =>
      <Drink key={drink.title} drink={drink} />
    );
  }

  render() {
    return (
      <div className="gag">
        <div className="wrapper">
          {this.renderDrink()}
        </div>
      </div>
    );
  }
}

export default DrinkList;
