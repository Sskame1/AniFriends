import React, { useState } from 'react';
import Card from './card';

const CardsContainer = ({ cards }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <button onClick={handlePrevCard}>👈</button>
      <Card data={cards[activeCardIndex]} />
      <button onClick={handleNextCard}>👉</button>
    </div>
  );
};
export default CardsContainer;