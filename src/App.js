
import './App.css';
import React, { useState } from 'react';
import Button from './Component/Button';
import Image from './Component/Image';
import NavBar from './Component/NavBar';
import Text from './Component/Text';

const App = () => {
  const [showText, setShowText] = useState(false);
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <div className="text-component">
      <Button
        buttonText={showText ? 'Hide text' : 'Show text'}
        onClick={toggleText}
        className="custom-button"
      />
      <Text showText={showText} />
      </div>
      <Image />
    </div>
    </div>
  );
};
export default App;
