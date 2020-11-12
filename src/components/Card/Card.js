import React from 'react'; 
import './Card.css';


const Card = ({handleClick, id , flipped, cardName}) => {
    return ( 
        <div className={`flip-container card ${flipped ? 'flipped': ''}`} 
            onClick={()=>handleClick(id) } >
            <div className="flipper">
                <img src={flipped ? `/img/${cardName}.png` : `/img/back.png`} 
                      className={flipped ? 'front' : 'back'}/>
            
            </div>
        </div>
     );
}
 
export default Card;