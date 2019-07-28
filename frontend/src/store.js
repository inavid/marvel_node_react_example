import { createStore } from 'redux'
import data from './reducers/data'

const initialState = {
  "xmen": []
}

let store = createStore(
  data, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store