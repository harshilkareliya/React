import { INCREMENT, DECREMENT } from "./action";


const reducer = ( state ,action) => {
    switch (action.type) {
        case INCREMENT: return {
            ...state,
            products : state.products.map(item => 
                item.id === action.payload
                ? { ...item, value: item.value + item.price }
                : item
            )
        }
        case DECREMENT: return {
            ...state,
            products : state.products.map(item => 
                item.id === action.payload
                ? { ...item, value: item.value - item.price }
                : item
            )
        }
        default:
            return state;
    }
}

export default reducer