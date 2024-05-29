import {ADD, REMOVE} from './action'

const intialState = {
    money : 0
}

function moneyReducer(state = intialState, action){

    switch(action.type){

        case 'ADD' : return {
            ...state,
            money : state.money + action.payload,
            
        }
        
        case 'REMOVE' : return {
            ...state,
            money : state.money - action.payload
        }

        default : return state
    }

}

export default moneyReducer