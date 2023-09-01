// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import './css/style.css';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=39191395-38934de5639dac1bfa2e5f5fc&q=${query}&image_type=photo`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Moteur de recherche d'images</h1>
      </div>
      <div className="flex justify-center"> 
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default App;
