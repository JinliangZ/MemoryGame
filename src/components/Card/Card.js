import React from 'react'; 
import './Card.css';


const Card = ({cardName,id ,handleClick, flipped,  disabled, solved}) => {
    return ( 
        <div className={`flip-container card ${flipped ? 'flipped': ''}`} 
            onClick={()=> disabled ? null: handleClick(id) } >
            <div className="flipper">
                <img src={flipped || solved ? 
                `/img/${cardName}.png` : `/img/back.png`} 
                      className={flipped  ? 'front' : 'back'}/>
            
            </div>
        </div>
     );
}
 
export default Card;