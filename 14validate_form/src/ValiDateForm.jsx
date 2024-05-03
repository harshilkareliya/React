import React from 'react'
import { useState } from 'react';
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function ValiDateForm() {
    const [logIn, setLogIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    function handleIn(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errors = validate(formData);
        if (Object.keys(errors).length === 0) {
            alert(`Successfully submitted!`);
            setLogIn(true)
        } else {
            setErrors(errors);
        }
    }

    function validate(data) {
        let errors = {};

        if (data.password.length < 8) {
            errors.password = "Password must be at least 8 characters!";
        }

        if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email address is invalid!";
        }

        return errors;
    }



    return (
        <div >
            <div className='container-fluid d-flex justify-content-center align-items-center flex-wrap' id='validate'>
                <h4 className='w-100 text-secondary'>(validate form)</h4>
                <div id='blue'>
                    <h1></h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 rounded rounded-3">
                        <form action="" className='p-3' onSubmit={handleSubmit}>
                            <h5 className='mb-5 mt-4 text-center'>LogIn Here..</h5>
                            <label htmlFor="">UserName</label>
                            <input type="Email" placeholder='Email or Phone' name='email' value={formData.email} onChange={handleIn} className='text-white border border-dark form-control mb-4 mt-2' />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleIn} className='text-white border border-dark form-control mb-1 mt-2' />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                            <button className='btn mt-5 fs-5 bg-white text-black'>Log In</button>
                            <div className='d-flex justify-content-between mt-4 mb-3' id='btn'>
                                <button className='btn ps-3 pe-3'><AiOutlineGooglePlus className='fs-5' /> Google</button>
                                <button className='btn ps-3 pe-3'><FaFacebook /> Facebook</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id='orange'>
                    <h1></h1>
                </div>
            </div>

        </div>
    )
}

export default ValiDateForm