import React from 'react'
import { useState } from 'react'

function UpdateValue(Products) {
    function NewComponents() {
        const [quantity, setQuantity] = useState(0)
        function increse() {
            setQuantity(quantity + 1)
        }
        function remove() {
            if (quantity != 0) setQuantity(quantity - 1)
                
            else {
                setQuantity(0)
                alert('Please! add Quntity')
            }
        }
        return <Products quantity={quantity} add={increse} remove={remove} />
    }
    return NewComponents
}

export default UpdateValue
