import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';
import Card from './components/Card/Card';
import React, { useState, useEffect} from 'react';
import deck from './deck';


function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  
  const [dimension, setDimension] = useState(400);


  useEffect(() => {
    resizeBoard()
    setCards(deck())
 
  }, [])



  const handleClick =(id)=>{
    setFlipped([...flipped,id]);
  }

  const resizeBoard = ()=>{
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ))
  }


  return (
    <div className="App">      
      <h1>Memory Game</h1>
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
