
// components/MovingText.js

import React from 'react';
import styles from '@/components/styles/MovingText.module.css';

const MovingText = () => {
  return (
    <div className= {styles.movingTextContainer} >
      <p className= {styles.movingText}>Welcome to Get Shiksha. It is the India's first Website which predicts you to Get your Shiksha from your desired College/Universities. Book your appointment now.</p>
    </div>
  );
};

export default MovingText;
