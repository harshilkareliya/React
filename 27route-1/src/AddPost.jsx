import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddPost({addPost}) {

    const [title, settitle] = useState('')
    const [discription, setdiscription] = useState('')
    const navigate = useNavigate()

    function addPostthis(e) {
        e.preventDefault();
        addPost(title, discription);

        navigate('/')
    }
    return (
        <div>

            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">ADD POST HERE</h3>
                                    <form onSubmit={addPostthis}>

                                        <div className="row">
                                            <div className="col-md-12 mb-4">

                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Add Title</label>
                                                    <input type="text" className="form-control form-control-lg" value={title} onChange={(e) => settitle(e.target.value)} />
                                                </div><br />
                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Add Description</label>
                                                    <textarea className='form-control form-control-lg' value={discription} onChange={(e) => setdiscription(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2 text-center">
                                        <button className="btn btn-primary btn-lg" type='submit'> Add Post</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddPost
