import React from 'react'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Todo() {

    const [inputTask, setinputTask] = useState('')
    const [todo, settodos] = useState([])
    localStorage.setItem("alltask", JSON.stringify(todo))
    todo.reverse()

    function addtask() {
        const newtask = {
            text: inputTask
        }
        settodos([...todo, newtask])
        setinputTask('')
    }

    function deleteTask(index) {
        const updatedTasks = [...todo];
        updatedTasks.splice(index, 1);
        settodos(updatedTasks);
    }

    function editTask(index, newText) {
        const updatedTasks = [...todo];
        updatedTasks[index].text = newText;
        settodos(updatedTasks);
      }  

    return (
        <div>
            <center>
                <h1>TODO LIST</h1>
                <input type="text"
                    placeholder='Enter your Text'
                    value={inputTask}
                    onChange={(e) => setinputTask(e.target.value)}
                />
                <button onClick={addtask}>ADD TASK</button>
                <br /><br /><br />
                <h1 style={{ backgroundColor: 'gainsboro' }}>Your Tasks</h1>
            </center>
            <div style={{ padding: '0px 70px' }}>
                {
                    todo && todo.map((e, i) => (
                        <div className='showTasks'>
                            <h1 key={i}>{e.text}</h1>
                            <span onClick={() => {
                                const newText = prompt("Enter new text:", e.text);
                                if (newText !== null) {
                                    editTask(i, newText);
                                }
                            }}><FaEdit /></span>
                            <span onClick={() => deleteTask(i)}><MdDelete /></span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo
