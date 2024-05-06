import React from 'react'

function Showtodo() {
let stored = localStorage.getItem("alltask")
let todo = JSON.parse(stored)
  return (
    <div>
      {
            todo && todo.map((e,i)=>(
                <h1 key={i}>{e.text}</h1>
            ))
      }
    </div>
  )
}

export default Showtodo
