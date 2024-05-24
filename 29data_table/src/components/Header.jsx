import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Header({search,setsearch}) {


    // function handleSearch(e){
    //     setsearch(e.target.value)
    //     searchedProduct(search)
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AtoZ</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className='nav-link active'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/addproduct'} className='nav-link'>Add Product</Link>
                            </li>
                            
                        </ul>
                        <div className="d-flex" >
                            <input value={search} onChange={(e)=>setsearch(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                {/* <button className="btn btn-outline-success"  >Search</button> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
