import { INCREMENT, DECREMENT } from "./action";


const reducer = (action,state) => {
    switch(action.type){
        case INCREMENT : return {
            ...state,
            prices : state.products.map(item => item.id === action.playload)
            ? {...item , value : item.value + item.price}
            : item 
        }
        case DECREMENT : return {
            ...state,
            prices : state.products.map(item => item.id === action.playload)
            ? {...item , value : item.value - item.price}
            : item 
        }
    }
}

export default reducer