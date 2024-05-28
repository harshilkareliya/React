import {ADD, REMOVE} from './action'

const intialState = {
    money : 0
}

const money300 = {
    money300 : 0
}


function moneyReducer(state = intialState, action){

    switch(action.type){

        case 'ADD' : return {
            ...state,
            money : state.money + 500,
            money300 : state.money300 + 300,
            switch(state){
                case '300' : return {
                    
                }
            }
        }
        
        case 'REMOVE' : return {
            ...state,
            money : state.money - 500
        }

        default : return state
    }

}

export default moneyReducer