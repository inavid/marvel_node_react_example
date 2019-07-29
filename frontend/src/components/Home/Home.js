import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../../api'
import HomeDumb from './HomeDumb'
import Modal from '../Modal/ModalContainer'
import './Home.css'
import Fuse from 'fuse.js'

function mapStateToProps(state) {
  return {
    xmen: state.xmen,
    'xmen_filtered': (state.xmen_filtered) ? state.xmen_filtered : state.xmen,
    'modal_is_open': (state.modal_is_open) ? state.modal_is_open : false,
    'is_loading': (state.is_loading) ? state.is_loading : false
  }
}

class Home extends Component {

  offset = 0
  limit = 20
  pageCount = 1

  async componentWillMount() {
    this.props.dispatch({
      type: 'is_loading',
      payload: {
        'is_loading': true
      }
    })
    const response = await API.getCharactersList(this.offset, this.limit)
    this.pageCount = (response.total / this.limit)
    this.props.dispatch({
      type: 'character_list',
      payload: {
        xmen: response.characters,
        'xmen_filtered': response.characters,
        'is_loading': false
      }
    })
  }

  handleSearch = (event) => {
    if(event.target.value.length === 0) {
      this.props.dispatch({
        type: 'character_list',
        payload: {
          'xmen_filtered': this.props.xmen
        }
      })
      return false
    } 

    const fuseOptions = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        'name',
      ]
    };
    const fuse = new Fuse(this.props.xmen, fuseOptions)
    const result = fuse.search(event.target.value)
    this.props.dispatch({
      type: 'filter_list',
      payload: {
        'xmen_filtered': result
      }
    })
  }

  handleRowClick = (character) => {
    const response = API.getCharacterDetail(character.id)
    response.then(
      response => response.json()
    )
    .then(responseJson => {
      this.props.dispatch({
        type: 'modal_is_open',
        payload: {
          'modal_is_open': true,
          'character_selected': responseJson[0]
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handlePaginationClick = data => {
    this.props.dispatch({
      type: 'is_loading',
      payload: {
        'is_loading': true
      }
    })
    let selected = data.selected;
    let offset = Math.ceil(selected * this.limit);
    
    const response = API.getCharactersList(offset, this.limit)

    response.then(responseJson => {
      this.props.dispatch({
        type: 'character_list',
        payload: {
          xmen: responseJson.characters,
          'xmen_filtered': responseJson.characters,
          'is_loading': false
        }
      })
    })
    .catch(error => {
      console.log(error)
    })

  };

  render() {
    return(
      <div>
        <HomeDumb 
          className={'container'}
          xmen = {this.props.xmen_filtered}
          handleRowClick={this.handleRowClick}
          handleSearch={this.handleSearch}
          handlePaginationClick={this.handlePaginationClick}
          pageCount={this.pageCount}
          is_loading={this.props.is_loading}
        />
        <Modal />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
