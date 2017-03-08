import React from 'react';

const Drink = ({ drink }) => {
  const { title, image_jpg, score, comments } = drink;
  return (
    <div className="item">
      <div className="info">
        <h2>{title}</h2>
        <div class="social">
          <p>{score}</p>
          <p>{comments}</p>
        </div>
      </div>
      <img src={image_jpg} als="" />
    </div>
  );
};

export default Drink;
