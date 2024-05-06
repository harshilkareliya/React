import React from 'react'
import { useState } from 'react'
import Showtodo from './Showtodo'
function Todo() {

    const [inputTask, setinputTask] = useState('')
    const [todo, settodos] = useState([])
    localStorage.setItem("alltask",JSON.stringify(todo))
    todo.reverse()

    function addtask(){
        const newtask = {
            text : inputTask
        }
        settodos([...todo, newtask])
        setinputTask('')
    }
    return (
        <div>
            <center>
                <h1>TODO LIST</h1>
                <input type="text" 
                    placeholder='Enter your Text'
                    value = {inputTask}
                    onChange={(e)=>setinputTask(e.target.value)}
                />          
                <button onClick={addtask}>ADD TASK</button>
                <br /><br /><br />
                <h1>Your Task</h1>
                {
                    <Showtodo/>
                }
            </center>
        </div>
    )
}

export default Todo
