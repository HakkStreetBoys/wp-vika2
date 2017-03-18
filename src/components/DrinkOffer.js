import React, { Component } from 'react';
import axios from 'axios';

class DrinkOffer extends Component {
  state = {
    drinkoffers: [],
    loading: true,
  }

  componentWillMount() {
    axios.get('http://pebbleplates.com/repeat-menu/wp-json/acf/v2/options/drink_promo')
    .then(response => this.setState({
      drinkoffers: response.data.drink_promo[0],
      loading: false,

    }))
    .catch(err => console.log(err));
    // console.log(response);
  }

  renderOffer() {
    const { promo_drink_title, promo_drink_description, promo_drink_image, promo_drink_button, show_promo_drink } = this.state.drinkoffers;
    
    if(!this.state.loading && show_promo_drink === true) {
      return (
        <div className="promo_offers">
          <div className="promo_bg">
            <div className="promo_overlay"></div>
            <img src={promo_drink_image.sizes.large} alt="" />
          </div>
          <div className="promo_content">
            <h2>{promo_drink_title}</h2>
            <p>{promo_drink_description}</p>
            <a href="#"><button>{promo_drink_button}</button></a>
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

export default DrinkOffer;
