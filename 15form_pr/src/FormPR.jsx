import React, { useState } from 'react';
import { FaGifts } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { RiTimerFlashLine } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

function FormPR({ products }) {

    const [logIn, setLogIn] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
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

    const handleLogout = () => {
        setLogIn(false);
    };

    function validate(data) {
        let errors = {};

        if (!data.username) {
            errors.username = "Username is required!";
        }
        if(data.password.length === 0){
            errors.password = "Password is required!";
        } else if (data.password.length < 8) {
            errors.password = "Password must be at least 8 characters!";
        }

        if(data.email.length === 0){
            errors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email address is invalid!";
        } 

        return errors;
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const handleDropdownMouseEnter = () => {
        setShowDropdown(true);
    };

    

    return (
        <div>
            {logIn ? (
                <>
                    <div>
                        <header>
                            <div className="container-fluid text-white m-0 p-0">
                                <div className="row p-0 m-0">
                                    <div className="col-lg-12 m-0" id='info'>
                                        <h6 className='d-flex justify-content-end align-items-center'>

                                            Currency
                                            <select name="" id="" className='me-2 ms-1fs-6'>
                                                <option value="">INR</option>
                                                <option value="">USD</option>
                                                <option value="">THB</option>
                                                <option value="">SGD</option>
                                                <option value="">QAR</option>
                                                <option value="">INR</option>
                                                <option value="">CAD</option>
                                            </select>

                                            | Franchise Enquiries | Corporate Gifts | Menu

                                        </h6>
                                    </div>
                                    <div className="col-lg-12 p-2" id='logo-sec'>
                                        <div className="row align-items-center">
                                            <div className="col-lg-2 d-flex ms-3">
                                                <h1> <FaGifts />fnp</h1>
                                                <h1>|</h1>
                                                <span className='font-size-10px fw-bold pt-2 ps-1'>F E R N S <br />N <br />P E T A L S</span>
                                            </div>
                                            <div className="col-lg-5">
                                                <h6 className='d-flex bg-white rounded rounded-2 mt-2'><input type="search" placeholder='search..' className='form-control border border-white bg-white ' /> <IoMdSearch className='mt-2 me-2 fs-4 text-black' /></h6>
                                            </div>
                                            <div className="col-lg-2">
                                                <h6 className='border p-2 mt-2 rounded rounded-2 bg-white text-secondary'>select delivery location</h6>
                                            </div>
                                            <div className="col-lg-1 d-flex justify-content-evenly text-center   m-auto">
                                                <h5 className='me-3'>
                                                    <a href="" className='text-white'>
                                                        <FaCartArrowDown />
                                                        <h6> cart</h6>
                                                    </a>
                                                </h5>
                                                <h5>
                                                    <a href="" className='text-white' id='user' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                                        <FaCircleUser />
                                                        <h6>hi guest</h6>
                                                    </a>
                                                    {showDropdown && (
                                                        <div
                                                            className="dropdown d-flex shadow-lg p-3"
                                                            onMouseEnter={handleDropdownMouseEnter}
                                                            onMouseLeave={handleMouseLeave}>
                                                            {/* Add your anchor tags or any content here */}
                                                            <a href="">fnpCash</a>
                                                            <a href="">my Orders</a>
                                                            <a href="">Contact Us</a>
                                                            <a href="">FAQs</a>
                                                            <hr />
                                                            <h6>want to log Out?</h6>
                                                            <button className='btn border' onClick={handleLogout}>Log Out</button>
                                                        </div>
                                                    )}
                                                </h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="container-fluid p-2 shadow-sm">
                            <nav className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                <h6 className='d-flex justify-content-evenly font-size-15px'>
                                    <a href="">MOTHER'S DAY GIFT</a>
                                    <a href="">BIRTHDAY</a>
                                    <a href="">ANNIVARSARY</a>
                                    <a href="">CAKE</a>
                                    <a href="">FLOWERS</a>
                                    <a href="">PERSONALISED</a>
                                    <a href="">PLANTS</a>
                                    <a href="">CHOCOLATES</a>
                                    <a href="">COMBOS</a>
                                    <a href="">MORE</a>
                                    <a href="">OCCASION</a>
                                    <a href="">GLOBAL</a>
                                    <a href="">ON TREND</a>
                                </h6>
                            </nav>
                        </div>

                        <div className="container-fluid p-2 bg-white">
                            <div className="row justify-content-evenly text-secondary">
                                <div className="col-lg-2 font-size-10px">
                                    <h6><RiTimerFlashLine /> 2 Hour Delivery</h6>
                                </div>
                                <div className="col-lg-2 font-size-10px">
                                    <h6><FaTruck /> Free Shipping</h6>
                                </div>
                                <div className="col-lg-2 font-size-10px">
                                    <h6><IoMdGift /> 90 Thousand+ Gifts</h6>
                                </div>
                                <div className="col-lg-2 font-size-10px">
                                    <h6><FaRegFaceSmileBeam /> 8 Million Happy Customers</h6>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid ps-5 pt-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Combos N Gift Hampers</li>
                                </ol>
                            </nav>
                        </div>

                        <div className="comtainer-fluid ps-5 pe-5">
                            <div className="row p-2 bg-white">
                                <div className="col-lg-12 mb-2 mt-2">
                                    <h5>Combos N Gift Hampers | 36 of 1002 Gifts</h5>
                                </div>
                                <div className="col-lg-12">
                                    <h6>Sort by:
                                        <a href="" className='text-secondary ms-3 me-5'>Recommanded</a>
                                        <a href="" className='text-secondary me-5'>New</a>
                                        <a href="" className='text-secondary me-5'>Price: Low to High</a>
                                        <a href="" className='text-secondary me-5'>Price: High to Low</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='products d-flex flex-wrap mt-4'>
                            {
                                products.map(products => (
                                    <div className='col-lg-3 col-md-6 col-sm-12 col-12 product border shadow-sm p-2 bg-white'>
                                        <div key={products.id}>
                                            <img src={products.image} alt={products.title} className='w-100 border m-auto' />
                                            <h6 className='p-2'>{products.title}</h6>
                                            <p className='ps-2'>{products.paragraph}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            ) : (
                <div className='container-fluid p-0'>
                    <div className='d-flex justify-content-center align-items-center flex-wrap' id='registration-form'>
                        <div>
                            <img src="https://www.king.com/images/gameCharacters/Candy_Crush_Soda_Kimmi_King_Wave_left.webp?_v=1xdpwjh" width="90%" height="600px" alt="Candy Crush" />
                        </div>
                        <figure className="swing wow animate__ animate__flipInX animated">
                            <form onSubmit={handleSubmit} className='p-5'>
                                <h4 className='mb-4'>Registration Form</h4>
                                <label htmlFor="">Username*</label>
                                <input type="text" name='username' value={formData.username} placeholder='' onChange={handleIn} className='form-control mb-3' id='username' />
                                {errors.username && <div className="text-danger">{errors.username}</div>}

                                <label htmlFor="">Password*</label>
                                <input type="password" name='password' value={formData.password} placeholder='' onChange={handleIn} className='form-control mb-3' id='password' />
                                {errors.password && <div className="text-danger">{errors.password}</div>}

                                <label htmlFor="">Email Address*</label>
                                <input type="text" name="email" value={formData.email} placeholder='' onChange={handleIn} className='form-control mt-1' id='email' />
                                {errors.email && <div className="text-danger">{errors.email}</div>}

                                <button type='submit' className='btn border p-2 mt-3 w-50 btn-primary'>LogIn</button>
                            </form>
                        </figure>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FormPR;