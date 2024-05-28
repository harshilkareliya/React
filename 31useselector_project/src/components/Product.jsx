import React from 'react'
import { addMoney,removeMoney } from '../Redux/action'
import { useDispatch } from 'react-redux'


function Product() {

    const dispatch = useDispatch()

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-lg-4">
                    <h3>Buy Shoes Rs.500</h3>
                    <button className='btn border mx-3' onClick={()=>{dispatch(removeMoney())}}>-</button>
                        add to cart
                    <button className='btn border mx-3' onClick={()=>{dispatch(addMoney())}}>+</button>
                </div>
                <div className="col-lg-4">
                    <h3>Buy Shoes Rs.300</h3>
                    <button className='btn border mx-3' >-</button>
                        add to cart
                    <button className='btn border mx-3' onClick={()=>{dispatch(addMoney())}}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product
