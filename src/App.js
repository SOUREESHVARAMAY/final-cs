// App.jsx
import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Soureesh Varma Yarkaraju webapp</h1>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
};

export default App;
