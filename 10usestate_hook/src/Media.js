import { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoMdChatboxes } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaShare } from "react-icons/fa";


function Media() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('logIn');
        setLoggedIn(loggedInStatus === 'true');
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    function handleSignIn() {
        setLoggedIn(true);
        // localStorage.setItem('logIn', true);
    };

    function handleSignOut() {
        setLoggedIn(false);
        // localStorage.setItem('logIn', false);
    };

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            {loggedIn ? (
                <>
                    {/* Navbar */}
                    <div className='container-fluid mb-3'>
                        <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
                            <div className='row'>
                                <div className="col-lg-12">
                                    <div className="row justify-content-evenly p-2">
                                        <div className="col-lg-2 text-center rounded p-2" id='nav'>
                                            <button type='button' className='btn text-white' onClick={toggleMode}>
                                                {isDarkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                                            </button>
                                        </div>
                                        <div className="col-lg-7 rounded d-flex justify-content-between align-items-center p-2" id='nav'>
                                            <div className="left w-75"><FcSearch className='me-1 ms-1' /><input type="text" placeholder='Search here...' className='bg-transparent text-white' style={{ width: "95%", border: "1px solid rgb(57, 56, 56)" }} /></div>
                                            <div className="right text-white"><IoFilter className='me-1' /> Filters</div>
                                        </div>
                                        <div className="col-lg-2 rounded p-2 text-center d-flex justify-content-center align-items-center" id='nav'>
                                            <h6 className='text-white'>Become a Seller</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SIDE-BAR */}
                    <div>
                        <div className='container-fluid'>
                            <div className="row justify-content-evenly">
                                <div className="col-lg-2 rounded rounded-2" id='sidebar'>
                                    <div className="row" id='list'>
                                        <div className="col-lg-12 top-content">
                                            <div className="items"><FaHome className='icon' /> Home</div>
                                            <div className="items"><FaBell className='icon' /> Notification</div>
                                            <div className="items"><IoBag className='icon' /> Shop</div>
                                            <div className="items"><IoMdChatboxes className='icon' /> Conversation</div>
                                            <div className="items"><IoIosWallet className='icon' /> Wallet</div>
                                            <div className="items"><FaYoutube className='icon' /> Subscription</div>
                                            <div className="items"><CgProfile className='icon' /> My Profile</div>
                                        </div>
                                        <div className="col-lg-12 bottom-content">
                                            <button className='btn text-white' onClick={handleSignOut}><h6 className='items'><CiLogout className='icon' /> Log Out</h6></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 rounded rounded-2" id='post'>
                                    <div className="row">
                                        <div className="col-lg-12 d-flex p-2">
                                            <div className='m-2'>
                                                <h4 className='border border-2 border-warning ps-3 pe-3 pt-2 pb-2' style={{ borderRadius: "50%" }}>R</h4>
                                            </div>
                                            <div className='d-flex justify-content-between w-100 m-2'>
                                                <div>
                                                    <h5>City Light</h5>
                                                    <h6>amazon city</h6>
                                                </div>
                                                <div><HiOutlineDotsVertical className='fs-4' /></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <p>City is everything that provide everything that we need, city is over first monterh 77</p>
                                        </div>
                                        <div className="col-lg-12 rounded rounded-3 d-flex justify-content-center ps-5 pe-5" style={{ height: "450px" }}>
                                            <img src="https://cdn.pixabay.com/photo/2020/01/25/19/13/paris-4793193_1280.jpg" alt="" className='w-100 h-100 rounded rounded-3' />
                                        </div>
                                        <div className="col-lg-12 d-flex mt-4">
                                            <h6>
                                                <button className='btn text-white'><i class="bi bi-heart me-1"></i> Like</button>
                                            </h6>
                                            <h6>
                                                <button className='btn text-white'><i class="bi bi-chat-left me-1"></i> comment</button>
                                            </h6>
                                            <h6>
                                                <button className='btn text-white'><FaShare className='me-1' /> share</button>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 rounded rounded-2 rightPanel"></div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* logIn code */}
                    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                        <div className='rounded rounded-5 main' id='logIn'>
                            <div className='ps-5'>
                                <i class="bi bi-image fs-2 mb-2"></i>
                                <h4 >Enjoy the trip <br /> with me</h4>
                            </div>
                            <div id='signupbtn'>
                                <button type='button' className='btn text-white border mt-5'>Sign Up</button>
                                <h6 className='mt-3'>Already have an account?</h6>
                                <button type='button' className='btn text-white border' onClick={handleSignIn}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Media;
