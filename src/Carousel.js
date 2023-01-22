import React, { useState } from 'react';
import './ArticleComponent.css'; 

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel-item-container'>
      <button className="prev-btn" onClick={previousSlide}>Previous</button>
      <div className='article-item'>{children[currentIndex]}</div>
      <div className='article-item'>{children[currentIndex+1]}</div>
      <div className='article-item'>{children[currentIndex+2]}</div>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
