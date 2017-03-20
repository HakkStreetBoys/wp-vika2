import React from 'react';
import axios from 'axios';

const DrinkDetail = ({ drink, onProductRemove }) => {

  if(!drink) {
    return <span className="fleh"></span>;
  }

  let tags;
  if (drink.acf.menu_tags != null) {
    tags = drink.acf.menu_tags.map(menu_tag =>
      <div><li>{menu_tag.name}</li></div>
    );
  }

  let relatedItems;
  if (drink.acf.menu_related != null) {
    relatedItems = drink.acf.menu_related.map(menu_related =>
      <div className="related_item">
        <h3>{menu_related.post_title}</h3>
      </div>
    );
  }

  return (
    <div className="ovrlay">
      <i onClick={() => onProductRemove(drink)} className="fa fa-close"></i>
      <div className="single_image">
        <img src={drink.acf.menu_image.sizes.large} alt="" />
      </div>
      <div className="single_content">
        <h2>{drink.acf.menu_title}</h2>
        <p>{drink.acf.menu_description}</p>

        <div className="tags">
          <ul>
            {tags}
          </ul>
        </div>

        <div className="related_items">
          {relatedItems}
        </div>
      </div>
    </div>
  );
}

export default DrinkDetail;
