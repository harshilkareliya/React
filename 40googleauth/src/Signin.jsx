import React, { useState, useEffect } from 'react'
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from './config'
import Home from './Home'

function Signin() {
    const [value, setvalue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, googleProvider)
            .then((data) => {
                setvalue(data.user.email)
                localStorage.setItem("email", data.user.email)
            }).catch((err) => {
                alert(err)
            })
    }
    useEffect(() => {
        let userEmail = localStorage.getItem('email')
        if (userEmail) {
            setvalue(userEmail)
        }
    }, [])
    return (
        <div>
            {value ? <Home /> : <button onClick={handleClick}>Click here to connect with google</button>}
        </div>
    )
}
export default Signin