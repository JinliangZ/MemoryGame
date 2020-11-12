import React from 'react';
import Card from '../Card/Card';

const Board = ({cards, flipped, handleClick, disabled,solved}) => {
    return (
        <div className="board">
            {cards.map(card =>{
                return (
                    <Card 
                        key={card.id}
                        id={card.id}
                        cardName={card.cardName}
                        flipped = {flipped.includes(card.id)} 
                        handleClick={handleClick}
                        disabled={disabled || solved.includes(card.id)}
                        solved={solved.includes(card.id)}
                    />    
                )
            })}
        </div>
     );
}
 
export default Board;