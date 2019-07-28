import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalDumb = (props) => {
  return(
    <Modal
      isOpen={props.modal_is_open}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div style={customStyles.modalContainer}>
        <div style={customStyles.modalHeader}>
          <h2 style={customStyles.title}>{props.character.name}</h2>
          <span 
            onClick={props.closeModal} 
            style={customStyles.icon}
          >
            <i className="fa fa-close"></i>
          </span>
        </div>
        <div style={customStyles.modalBody}>
          <p style={customStyles.description}>{props.character.description}</p>
          <h3>Comics</h3>                    
          <ul>
            {
              (props.character.comics) ?
                props.character.comics.map((row, index) => {
                  return(
                    <li key={index}>
                      {row.name}
                    </li>
                  )
                })
              : null
            }
          </ul>
          <h3>Series</h3>                    
          <ul>
            {
              (props.character.series) ?
                props.character.series.map((row, index) => {
                  return(
                    <li key={index}>{row.name}</li>
                  )
                })
              : null
            }
          </ul>
          <h3>Stories</h3>                    
          <ul>
            {
              (props.character.stories) ?
                props.character.stories.map((row, index) => {
                  return(
                    <li key={index}>{row.name}</li>
                  )
                })
              : null
            }
          </ul>
          <h3>Resources</h3>
          <ul>
              {
                (props.character.urls) ?
                  props.character.urls.map((row, index) => {
                    return(
                      <li 
                        key={index} 
                        style={customStyles.listText}
                      >
                        <a href={row.url}>{row.type}</a>
                      </li>
                    )
                  })
                : null
              }
          </ul>
        </div>
      </div>
    </Modal>
  )
}

const customStyles = {
  overlay: {
    overflow: "scroll",
    zIndex: 1
  },
  content : {
    position: "unset",
    width: "85%",
    height: "90%",
    marginLeft: '5%',
    marginTop: "5%",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    justifyContent: "space-around",
    margin: "10px",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    margin: "10px"
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    margin: "10px"
  },
  listText: {
    textTransform: "capitalize"
  },
  icon: {
    marginTop: "3%",
    fontSize: "1.5em"
  },
  description: {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "600"
  }
}

export default ModalDumb