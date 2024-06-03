import React,{useReducer} from 'react'
import Data from './Data'
import { increment, decrement } from './action'
import reducer from './reducer'

function Home() {

    const [state, dispatch] = useReducer(reducer, Data)
    const handleIncrement = (id) =>{
        dispatch(increment(id))
    }

    console.log(Data.products)
    
    const handleDecrement = (id) =>{
        dispatch(decrement(id))
    }
  return (
    <div>
       {
state.products.map(item=>(
   <>
   
   <h1>{item.value}</h1>
    <button onClick={()=>handleIncrement(item.id)}>+</button>
   </>
))
       }
    </div>
  )
}

export default Home


// state.products.map((item )=>(
//     <>
//         <h1>Product {item.id}</h1>
//         <h2>Amount : {item.value}</h2>
//         <button onClick={()=>handleIncrement(item.id)}>+</button>
//         <button onClick={()=>handleDecrement(item.id)}>-</button>
//     </>
// ))