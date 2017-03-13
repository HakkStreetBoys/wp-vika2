import React, { Component } from 'react';
import Drink from './Drink';
import axios from 'axios';

class DrinkList extends Component {
  state = {
    drink: [],
    loading: true,
  }

  componentWillMount() {
    axios.get('http://localhost:8888/repeat-menu/wp-json/wp/v2/menu?menu_cat=9')
    .then(response => this.setState({
      drink: response.data,
      loading: false,
    }))
    .catch(err => console.log(err));
    console.log(this.state);
  }

  renderDrink() {
    // console.log(this.state);

    if(this.state.loading) {
      return (
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
    }

    return this.state.drink.map(drink =>
      <Drink key={drink.id} drink={drink} />
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
