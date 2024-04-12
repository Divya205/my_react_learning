import { useState } from "react";

export default function Player({initialName,symbol,isActive}){
    const [playerName, setPlayerName]=useState(initialName);
    const [isEditing, setIsEditing]=useState(false)
    //this function will execute when state updating variable changes and when user clicks on edit button
    function handleEditClick(){
        //wasEditing=>!wasEditing
        setIsEditing((editing)=>!editing);//schedule a state to true
     
    }
    
    function handleChange(event){
    setPlayerName(event.target.value);
    }


    let editablePlayerName=<span className="player-name">{playerName}</span>
    //if isediting is true then we should allow user to enter his name
    if(isEditing){
       editablePlayerName=(
        <input type="text" required value={playerName} onChange={handleChange} />// two way bindig: This way of listening a change in the input and feeding 
        //that updated value back into this input
  );
  }
    
    return(
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
     {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )
}