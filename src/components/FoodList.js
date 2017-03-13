import React, { Component } from 'react';
import Food from './Food';
import axios from 'axios';

class FoodList extends Component {
  state = {
    food: [],
    selectedProduct: null,
    loading: true,
  }

  componentWillMount() {
    axios.get('http://localhost:8888/repeat-menu/wp-json/wp/v2/menu?menu_cat=8')
    .then(response => this.setState({
      food: response.data,
      loading: false,
    }))
    .catch(err => console.log(err));
  }

  renderFood() {
    if(this.state.loading) {
      return (
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
    }

    return this.state.food.map(food =>
      <Food onSelectProduct={selectedProduct => this.setState({selectedProduct})} key={food.id} food={food} />
    );
    // console.log(this.state);
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
