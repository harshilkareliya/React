import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaShareSquare, FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { GoVideo } from "react-icons/go";

function Instagram() {

    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const toggleComment = (event) => {
        event.preventDefault();
        setIsCommentOpen(!isCommentOpen);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = (event) => {
        event.preventDefault();
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const handleEditComment = (index, newText) => {
        const updatedComments = [...comments];
        updatedComments[index] = newText;
        setComments(updatedComments);
    };

    const handleDeleteComment = (index) => {
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };


    return (
        <div className='mt-5'>

            <div className='rounded rounded-5 m-auto main pt-2'>

                <div className='container-fluid name'>
                    <div className='row'>
                        <div className="col-lg-12 d-flex justify-content-between">
                            <div className="dropdown w-auto mt-3 fs-5">
                                <a className="dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Instagram
                                </a>

                                <ul className="dropdown-menu bg-secondary text-white">
                                    <li><a className="dropdown-item text-white" href="#">Following</a></li>
                                    <li><a className="dropdown-item text-white" href="#">Favourites</a></li>
                                </ul>
                            </div>
                            <div className="icons w-auto fs-5 mt-3">
                                <a href="" className='pe-2'><FaRegHeart /></a>
                                <button type="button" className="position-relative bg-transparent border border-dark">
                                    <a href="" className='text-white'><FaFacebookMessenger /></a>
                                    <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill pe-4">
                                        10+
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-evenly scroll mt-3 text-center" id='story'>
                            <div>
                                <img src="" alt="" />
                                <h6>Your story</h6>
                            </div>
                            <div className='ms-3'>
                                <img src="" alt="" />
                                <h6>Kunjal_.</h6>
                            </div>
                            <div className='ms-3'>
                                <img src="" alt="" />
                                <h6>_krishna</h6>
                            </div>
                            <div className='ms-3'>
                                <img src="" alt="" />
                                <h6>Hargiie23</h6>
                            </div>
                            <div className='ms-3'>
                                <img src="" alt="" />
                                <h6>Jotliee_</h6>
                            </div>
                            <div className='ms-3'>
                                <img src="" alt="" />
                                <h6>Shrey08</h6>
                            </div>
                            <div className='ms-3'>
                                <img src="" alt="" />
                                <h6>Shiv_</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mt-4">
                    <div className='post'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img src="" alt="" id='img' className='ms-2' /> riddhiiee_
                            </div>
                            <a href="" className='fs-4 me-2'><HiOutlineDotsVertical /></a>
                        </div>
                        <div className='add-post mt-2'>
                            <div className='image-me rounded rounded-2'></div>
                            <a href="" className='ps-2'><FaRegHeart /></a>
                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <a href="" className='ps-3' onClick={toggleComment}><FaRegComment /></a>
                            </a>
                            <div className='offcanvas offcanvas-bottom' tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className='offcanvas-header'>
                                    <h5 className='offcanvas-title' id='offcanvasExampleLabel'>Comments</h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                                </div>
                                <div className='offcanvas-body d-flex p-0 m-0'>
                                    <form onSubmit={handleSubmitComment} className='d-flex w-100'>
                                        <input
                                            type="text"
                                            value={comment}
                                            onChange={handleCommentChange}
                                            placeholder="Write a comment..."
                                            className='form-control bg-transparent border border-black text-white'
                                        />
                                        <button type="submit" className='btn border border-black text-white'><IoMdAdd /></button>
                                    </form>
                                </div>
                            </div>
                            <a href="" className='ps-3'><FaShareSquare /></a>
                            {isCommentOpen && (
                                <div className="comment-section">
                                    {comments.map((comment, index) => (
                                        <div key={index} className="comment d-flex justify-content-between">
                                            <p>{comment}</p>
                                            <div className="comment-actions">
                                                <button className='bg-transparent text-white btn border-none' onClick={() => handleEditComment(index, 'New Text')}>
                                                    <FaEdit />
                                                </button>
                                                <button className='bg-transparent text-white btn border-none' onClick={() => handleDeleteComment(index)}>
                                                    <FaTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                        <div>
                            <h6 className='ps-2 pt-1'>riddhiiee_ <a href="" className='text-secondary'>4h</a> <span>Today!</span></h6>
                        </div>
                        {/* second post  */}
                        <div className='d-flex justify-content-between pt-3'>
                            <div>
                                <img src="" alt="" id='img' className='ms-2' /> riddhiiee_
                            </div>
                            <a href="" className='fs-4 me-2'><HiOutlineDotsVertical /></a>
                        </div>
                        <div className='add-post mt-2'>
                            <div className='image-me rounded rounded-2'></div>
                            <a href="" className='ps-2'><FaRegHeart /></a>
                            <a href="" className='ps-3' onClick={toggleComment}><FaRegComment /></a>
                            <a href="" className='ps-3'><FaShareSquare /></a>

                        </div>
                        <div>
                            <h6 className='ps-2 pt-1'>riddhiiee_ <a href="" className='text-secondary'>12h</a> <span> No caption needed! </span></h6>
                        </div>

                        <div className="row p-0 m-0" id='searchbar'>
                            <div className="col-lg-12 d-flex justify-content-evenly align-items-center fs-4 p-0">
                                <a href=""><IoMdHome /></a>
                                <a href=""><IoIosSearch /></a>
                                <a href=""><MdOutlineAddBox /></a>
                                <a href=""><GoVideo /></a>
                                <a href=""> <img src="" alt="" id='img' className='ms-2' /></a></div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Instagram
