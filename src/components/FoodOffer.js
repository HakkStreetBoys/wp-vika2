import React, { Component } from 'react';
import axios from 'axios';

class FoodOffer extends Component {
  state = {
    foodoffers: [],
    loading: true,
  }

  componentWillMount() {
    axios.get('http://pebbleplates.com/repeat-menu/wp-json/acf/v2/options/food_promo')
    .then(response => this.setState({
      foodoffers: response.data.food_promo[0],
      loading: false,

    }))
    .catch(err => console.log(err));
    // console.log(response);
  }

  renderOffer() {
    const { promo_food_title, promo_food_description, promo_food_image, promo_food_button, show_promo_food } = this.state.foodoffers
    if(!this.state.loading && show_promo_food === true) {
      return (
        <div className="promo_offers">
          <div className="promo_bg">
            <div className="promo_overlay"></div>
            <img src={promo_food_image.sizes.large} alt="" />
          </div>
          <div className="promo_content">
            <h2>{promo_food_title}</h2>
            <p>{promo_food_description}</p>
            <a href="#"><button>{promo_food_button}</button></a>
          </div>
        </div>
      )
    }
  }

  render() {
    // console.log(this.state.drinkoffers);
    return (
      <div>
        {this.renderOffer()}
      </div>
    );
  }
}

export default FoodOffer;
