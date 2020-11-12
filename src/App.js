import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';
import Card from './components/Card/Card';
import React, { useState, useEffect} from 'react';
import initial from './deck';


function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    setCards(initial())
 
  }, [])

  const handleClick =(id)=>{
    setFlipped([...flipped,id]);
  }
  return (
    <div className="App">      
      <h1>Memory</h1>
      <h2>Can you remember where the cards are?</h2>
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
