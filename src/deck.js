const shuffle =(array)=>{
    const _array = array.slice(0);
    for (let i= _array.length -1; i>0; i--){
        let rand = Math.floor(Math.random()*(i+1));
        [_array[i],_array[rand]] = [_array[rand],_array[i]]
    }
    return _array
}

const deck = () => {
    let id = 0;
    const cards = ['cherry','cocktail','footprint','pagoda',
    'sedan','star','superman','unicorn'].reduce((acc, card)=>{
        acc.push({
            id:id++,
            cardName:card
        })
        acc.push({
            id:id++,
            cardName:card
        })
        return acc
    },[]);
    
    return shuffle(cards)   
    
}
 
export default deck;