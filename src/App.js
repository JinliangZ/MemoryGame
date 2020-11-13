import './App.css';
import Board from './components/Board/Board';
import React, { useState, useEffect} from 'react';
import deck from './deck';


function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
      setCards(deck())    
  }, [])

  useEffect(() => {
    preloadImg()    
  }, [cards])

  const preloadImg =() =>{
    cards.map(card=>{
      const src = `./img/${card.cardName}.png`
      new Image().src = src
    }) 
  }

  const handleClick =(id)=>{
        setDisabled(true);
        if(flipped.length ===0){
          setFlipped([id])
          setDisabled(false)
        } else{
          if(sameCardClicked(id)){
            setDisabled(false)
          }else{
            setFlipped([flipped[0],id])
            if(isMatch(id)){
              setSolved([...solved,flipped[0],id])
              resetCards()
            }else{
              setTimeout(resetCards,600) 
            }            
          }
        }
  }

  const sameCardClicked =(id)=>flipped.includes(id); 

  const isMatch =(id)=>{
    const clickedCard = cards.find(card=>card.id === id);
    const flippedCard = cards.find(card=>card.id=== flipped[0]);

    return clickedCard.cardName === flippedCard.cardName
  }

  const resetCards =()=>{
    setFlipped([]);
    setDisabled(false);
  }

  const restart =()=>{
    window.location.reload();
  }


  return (
    <div className="App">      
      <h1>Memory Game</h1>
      <h2>Can you remember where the cards are?</h2>
      <button className='reload' onClick={restart}>New Game</button>
      <Board 
        cards={cards}
        flipped={flipped}
        disabled={disabled}
        handleClick={handleClick}
        solved={solved}
      />
    </div>
  );
}

export default App;
