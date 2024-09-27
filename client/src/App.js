import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
  fetch('/api')
    .then((response) => response.text())
    .then((message) => {
      console.log(message);
    });
  }, []);

  return (
    <div>
      <h1>Node.js Full-Stack App</h1>
      <p>This is the frontend served by React!</p>
    </div>
  );
}

export default App;

