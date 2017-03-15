import React from 'react';

const ProductDetail = ({ drink, onProductRemove }) => {
  // const { menu_title, menu_image, menu_price } = drink.acf;

  if(!drink) {
    return <span className="fleh"></span>;
  }

  return (
    <div className="ovrlay">
      <i onClick={() => onProductRemove(drink)} className="fa fa-close"></i>
      <div className="single_image">
        <img src={drink.acf.menu_image.sizes.large} alt="" />
      </div>
      <div className="single_content">
        <h2>{drink.acf.menu_title}</h2>
        {drink.acf.menu_description}
      </div>
    </div>
  );
}

export default ProductDetail;
