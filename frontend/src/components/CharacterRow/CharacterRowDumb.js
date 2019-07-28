import React from 'react'
import './CharacterRow.css';

const CharacterRowDumb = (props) => {
    return(
        <div className={"row-container"} onClick={()=>{props.handleRowClick(props.character)}}>
            <img className={"thumbnail"} src={props.character.thumbnail} alt={props.character.name} />
            <h1 className="character-name">{props.character.name}</h1>
        </div>
    )
}

export default CharacterRowDumb