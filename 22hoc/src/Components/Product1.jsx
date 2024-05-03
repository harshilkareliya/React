import React from 'react'
import UpdateValue from './UpdateValue'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Product1({ quantity, add, remove }) {
    return (
        <div>
            <center>
                <img src="https://th.bing.com/th/id/OIP.4qjBUSE6RVfLL5SQLjACeAHaJQ?w=143&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="" />
                <h5>Cleaner</h5>
                <p>
                    <span onClick={remove} style={{ cursor: 'pointer', marginRight: '10px' }}><FaMinus /></span>
                    Quantity : {quantity}
                    <span onClick={add} style={{ cursor: 'pointer', marginLeft: '10px' }}><FaPlus /></span>
                </p>
            </center>
        </div>
    )
}

export default UpdateValue(Product1)
