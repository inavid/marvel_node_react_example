import React, { Component } from 'react'
import CharacterRowDumb from './CharacterRowDumb'

class CharacterRow extends Component {

  render() {
    return(
      <CharacterRowDumb 
        character={this.props.character} 
        handleRowClick={this.props.handleRowClick}
      />
    ) 
  }
}

export default CharacterRow