import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [fireworks, setFireworks] = useState([]);

  const createFirework = () => {
    const newFirework = {
      id: Date.now(),
      left: `${Math.floor(Math.random() * 80 + 10)}vw`, // Random horizontal position
      height: `${Math.floor(Math.random() * 40 + 20)}vh`, // Random burst height
      color: getRandomColor(),
    };
    setFireworks((prevFireworks) => [...prevFireworks, newFirework]);

    setTimeout(() => {
      setFireworks((prevFireworks) =>
        prevFireworks.filter((firework) => firework.id !== newFirework.id)
      );
    }, 2000);
  };

  // Generate random color for each firework burst
  const getRandomColor = () => {
    const colors = ['#ff3f3f', '#ffea00', '#36d1dc', '#34e89e', '#ff9a9e', '#ff6b6b'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const interval = setInterval(createFirework, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1 className="diwali-message">Happy Diwali 🎆</h1>
      <div className="fireworks-container">
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            className="firework-shoot"
            style={{ left: firework.left, top: firework.height }}
          >
            <div
              className="firework-explode"
              style={{ backgroundColor: firework.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
