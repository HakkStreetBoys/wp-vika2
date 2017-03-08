import React, { Component } from 'react';
import Pane from './Pane';
import Tabs from './Tabs';
import DrinkList from './DrinkList'
import FoodList from './FoodList'

class TabContent extends Component {
  render() {
    return (
      <Tabs selected={0}>
        <Pane label="Drykkur">
          <div className="">
            <DrinkList />
          </div>
        </Pane>
        <Pane label="Matur">
          <div className="">
            {/* <KitchenOrders /> */}
            <FoodList />
          </div>
        </Pane>
      </Tabs>
    );
  }
}

export default TabContent;
