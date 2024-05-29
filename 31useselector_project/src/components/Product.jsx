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
                    <button className='btn border mx-3' onClick={()=>{dispatch(removeMoney(500))}}>-</button>
                        add to cart
                    <button className='btn border mx-3' onClick={()=>{dispatch(addMoney(500))}}>+</button>
                </div>
                <div className="col-lg-4">
                    <h3>Buy Shoes Rs.300</h3>
                    <button className='btn border mx-3' onClick={()=>{dispatch(removeMoney(300))}}>-</button>
                        add to cart
                    <button className='btn border mx-3' onClick={()=>{dispatch(addMoney(300))}}>+</button>
                </div>
                <div className="col-lg-4">
                    <h3>Buy Shoes Rs.100</h3>
                    <button className='btn border mx-3' onClick={()=>{dispatch(removeMoney(100))}}>-</button>
                        add to cart
                    <button className='btn border mx-3' onClick={()=>{dispatch(addMoney(100))}}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product
