import React, { Component } from 'react'
import ModalDumb from './ModalDumb'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
      "modal_is_open": (state.modal_is_open) ? state.modal_is_open : false,
      'character_selected': (state.character_selected) ? state.character_selected : {}
    }
}

class ModalContainer extends Component {

    closeModal = () => {
        this.props.dispatch({
          "type": "modal_is_open",
          "payload": {
            "modal_is_open": false
          }
        })
    }

    render() {
        return(
            <ModalDumb 
                modal_is_open={this.props.modal_is_open}
                closeModal={this.closeModal}
                character={this.props.character_selected}
            />
        )
    }
}

export default connect(mapStateToProps)(ModalContainer)