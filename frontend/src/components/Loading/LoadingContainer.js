import React, { Component } from 'react'
import ReactLoading from 'react-loading';

class LoadingContainer extends Component {
  render() {
    return(
      <ReactLoading type={"bars"} color={"black"} height={'40%'} width={'40%'} />
    )
  }
}

export default LoadingContainer