import React from 'react';
import { useState } from 'react';
import {itemData} from '../data.js'; 
const ItemsDisplay=()=>{

    const [displayItem, setDisplayItem]=useState(itemData)
    console.log(displayItem);
    
    return (
      <div className='itemSection'>
        {displayItem.map((item)=>{
            return(
                <div className='gallery'>
                    <img src={item.item_img} alt="food image"/>
                    </div>
            )
        })}
      </div>
    )
  }
  
    export default ItemsDisplay;