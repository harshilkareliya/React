import {createStore} from 'redux'
import moneyReducer from './reducer'

const store = createStore(moneyReducer)
export default store