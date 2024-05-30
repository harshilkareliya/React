import React,{useReducer} from 'react'
import Data from './Data'
import { increment, decrement } from './action'
import reducer from './reducer'

function Home() {

    const [state, dispatch] = useReducer(reducer, Data)

  return (
    <div>
        {
            Data.products.map(item =>(
                <>
                    <h1>Product {item.id}</h1>
                    <h2>Amount : {item.value}</h2>
                    <button onClick={()=>dispatch(increment(item.id))}>+</button>
                    <button onClick={()=>dispatch(increment(item.id))}>-</button>
                </>
            ))
        }
      
    </div>
  )
}

export default Home
