import React, { Component } from 'react';
import Pane from './Pane';
import Tabs from './Tabs';
import DrinkList from './DrinkList'
import FoodList from './FoodList'
import DrinkOffer from './DrinkOffer';
import FoodOffer from './FoodOffer';

class TabContent extends Component {
  render() {
    return (
      <Tabs selected={0}>
        <Pane label="Drykkur">
          <div className="drink_list">
            <DrinkOffer />
            <DrinkList />
          </div>
        </Pane>
        <Pane label="Matur">
          <div className="food_list">
            {/* <KitchenOrders /> */}
            <FoodOffer />
            <FoodList />
          </div>
        </Pane>
      </Tabs>
    );
  }
}

export default TabContent;
