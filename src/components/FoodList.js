import React, { Component } from 'react';
import Food from './Food';
import FoodDetail from './FoodDetail';
import axios from 'axios';

class FoodList extends Component {
  state = {
    food: [],
    loading: true,
    selectedProduct: null,
  }

  componentWillMount() {
    axios.get('http://pebbleplates.com/repeat-menu/wp-json/wp/v2/menu?menu_cat=8&per_page=30')
    .then(response => this.setState({
      loading: false,
      food: response.data,
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
      <Food
        onProductSelect={selectedProduct => this.setState({ selectedProduct })}
        key={food.id}
        food={food} />
    );
    // console.log(this.state);
  }

  render() {
    return (
      <div className="gag">
        <FoodDetail
          food={this.state.selectedProduct}
          onProductRemove={selectedProduct => this.setState({ selectedProduct: null })}
        />
        <div className="wrapper">
          {this.renderFood()}
        </div>
      </div>
    );
  }
}

export default FoodList;
