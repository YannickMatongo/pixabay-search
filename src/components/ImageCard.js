// src/ImageCard.js
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt={image.tags} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{image.tags}</div>
        <p className="text-gray-700 text-base">{image.user}</p>
      </div>
    </div>
  );
};

export default ImageCard;
