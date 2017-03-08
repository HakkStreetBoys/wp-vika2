import React from 'react';

const Food = ({ food }) => {
  const { title, image_jpg, image_gif } = food;
  return (
    <div className="item">
      <div className="info">
        <h2>{title}</h2>
      </div>
      <img src={image_gif} als="" />
    </div>
  );
};

export default Food;
