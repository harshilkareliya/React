import React, { useState, useEffect } from 'react'

function Controlled() {
    const [inputValue, setinputValue] = useState("")
    const [inputValuepass, setinputValuepass] = useState("")
    const [error, setError] = useState("");

    function handle(el) {
        el.preventDefault();

        if (inputValue.trim() === "" || inputValuepass.trim() === "") {
            setError(alert(`Please enter both email and password.`));
            return;
        }

        // Clear any previous error messages
        setError("");

        alert(`${inputValue}`)
        alert(`${inputValuepass}`)
        alert(`Successfully LogIn !`)
    }

    return (
        <>
            <form action="" onSubmit={handle}>
                <h4 className='p-4 text-center'>Controlled Form</h4>
                <div className='main d-flex justify-content-center align-items-center flex-wrap' style={{ height: "100vh" }}>
                    <div className='rounded rounded-5 main' id='logIn'>
                        <div className='ps-5'>
                            <i class="bi bi-image fs-2 mb-2"></i>
                            <h4 >Enjoy the trip <br /> with me</h4>
                        </div>
                        <div id='signupbtn' className='pt-5 mt-5'>
                            <label htmlFor="">Enter your e-mail</label>
                            <input className='form-control mt-2 mb-3' type="text" value={inputValue} onChange={(el) => setinputValue(el.target.value)} placeholder='Email' />
                            <label htmlFor="">Enter your password</label>
                            <input className='form-control mt-2' type="text" value={inputValuepass} onChange={(el) => setinputValuepass(el.target.value)} placeholder='Password' />
                            <button type='submit' className='btn btn-primary rborder mt-5' >Log In</button>
                        </div>
                    </div>
                    <h4 className='pb-5 pt-4 ms-3 w-100 text-secondary'>Uncontrolled Component</h4>
                </div>
            </form>
        </>

    )
}

export default Controlled