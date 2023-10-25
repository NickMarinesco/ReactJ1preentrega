import React from 'react';
import Count from '../Count/Count';



const ItemListContainer = ({greeting}) => {
    console.log(greeting)
    return (
        <>
        <h1>{greeting}</h1>
       <Count initial={1} stock={10}/>
        
      
        </>
       
    );
};

export default ItemListContainer;