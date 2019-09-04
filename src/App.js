import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const handleStrike = () => {
    console.log('strike')
  }

  const handleBall = () => {
    console.log('ball')
  }

  const handleFoul = () => {
    console.log('foul')
  }

  const handleHit = () => {
    console.log('hit')
  }

  return (
    <div className="App">
      Web Application Testing
      <Display balls={balls} strikes={strikes} />
      <Dashboard handleStrike={handleStrike} handleBall={handleBall} handleFoul={handleFoul} handleHit={handleHit} />

    </div>
  );
}

export default App;
