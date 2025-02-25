import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);

  const handleStrike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
      setBalls(0);
      if(outs < 2){
        setOuts(outs+1);
      } else {
        setOuts(0);
      }
      
    }
  };

  const handleBall = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const handleFoul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="App">
      Single Inning:
      <Display balls={balls} strikes={strikes} outs={outs}/>
      <Dashboard
        handleStrike={handleStrike}
        handleBall={handleBall}
        handleFoul={handleFoul}
        handleHit={handleHit}
      />
    </div>
  );
}

export default App;
