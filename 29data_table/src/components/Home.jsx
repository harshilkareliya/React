import React from 'react'
import Header from './Header'
import ShowProduct from './ShowProduct'
import { useState } from 'react'

function Home({allProduct ,editProduct, deleteProduct }) {

  const [search, setsearch] = useState('')
  
  
    let filterproduct =  allProduct.filter((e)=>(
      e.productName.toLowerCase().includes(search.toLowerCase())
    ))
    console.log(allProduct)


  return (
    <div>
      <Header search={search} setsearch={setsearch}/>
      <ShowProduct allProduct = {filterproduct}   editProduct={editProduct} deleteProduct={deleteProduct}  />
    </div>
  )
}

export default Home
