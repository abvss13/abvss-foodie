import React, { useState } from 'react';
import Card from './components/Card';
import Category from './components/Category';
import Food from './components/Food';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import './index.css'; // Import your CSS or SCSS file

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Card />
      <Food />
      <Category />
    </div>
  );
};

export default App;
