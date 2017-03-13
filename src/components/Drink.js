import React from 'react';

const Drink = ({ drink }) => {
  const { menu_title, menu_image, menu_price, menu_description } = drink.acf;
  return (
    <div className="item">
      <div className="item_img">
        <img src={menu_image.url} alt="" />
      </div>
      <div className="info">
        <h2>{menu_title}</h2>
      </div>
      <a href="#" className="item_btn">
        <div className="item_btn_inner">
          <ul>
            <li>Bæta við pöntun</li>
            <li>{menu_price}</li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Drink;
