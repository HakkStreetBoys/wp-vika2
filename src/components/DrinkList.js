import React, { Component } from 'react';
import Drink from './Drink';
import axios from 'axios';
import DrinkDetail from './DrinkDetail';

class DrinkList extends Component {
  state = {
    drink: [],
    loading: true,
    selectedProduct: null,
  }

  // constructor(props) {
  //       super(props);
  //       this.state = {
  //         drink: [],
  //         loading: true,
  //         selectedProduct: null,
  //       };
  //   }

  componentWillMount() {
    axios.get('http://pebbleplates.com/repeat-menu/wp-json/wp/v2/menu?menu_cat=9&per_page=30')
    .then(response => this.setState({
      loading: false,
      drink: response.data,
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
      <Drink
        key={drink.id}
        drink={drink}
        onProductSelect={selectedProduct => this.setState({ selectedProduct })}
      />



    );
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="gag">
        <DrinkDetail
          drink={this.state.selectedProduct}
          onProductRemove={selectedProduct => this.setState({ selectedProduct: null })}
        />
        <div className="wrapper">
          {this.renderDrink()}
        </div>
      </div>
    );
  }
}

export default DrinkList;
