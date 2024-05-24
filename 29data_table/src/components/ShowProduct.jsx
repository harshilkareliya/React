import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowProduct({ allProduct, deleteProduct }) {
    const [sortOrder, setSortOrder] = useState('');

    // Function to handle sorting
    const handleSort = (order) => {
        setSortOrder(order);
        if (order === 'htol') {
            allProduct.sort((a, b) => b.productPrice - a.productPrice);
        } else if (order === 'ltoh') {
            allProduct.sort((a, b) => a.productPrice - b.productPrice);
        } else if (order === 'default'){
            console.log( allProduct[0].id - allProduct[1].id )
            allProduct.sort((a,b) => a.id - b.id )
        }
    };
    return (
        <>
            <div className="">
                <div className="row" style={{position : 'absolute', right : '21px'}}>
                    <div className="col-md-4">
                        <div className="dropdown" >
                            <button className="btn btn-secondary dropdown-toggle bg-transparent text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by : Featured
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <button className="dropdown-item" onClick={() => handleSort('default')} style={{fontSize : '15px'}} >Default</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => handleSort('htol')} style={{fontSize : '15px'}} >price : high to low</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={() => handleSort('ltoh')} style={{fontSize : '15px'}}>price : low to high</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container mt-5 `}>
                <div className={`row ${(allProduct.length < 3) ? 'justify-content-center' : ''}`} >
                    {allProduct.map((product, index) => (
                        <div key={index} className="col-md-4 mb-4">

                            <div className="card position-relative">
                                {product.productImage && (
                                    <img
                                        src={URL.createObjectURL(product.productImage[0])}
                                        className="card-img-top productImage"
                                        alt={product.productName}
                                    />
                                )}
                                <div className="dropdown position-absolute icon-dropdown">
                                    <FaEllipsisV
                                        className="text-secondary"
                                        style={{ cursor: 'pointer' }}
                                        id={`dropdownMenuButton${index}`}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    />
                                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                                        <li>
                                            <Link to={`/editproduct/${product.id}`}>
                                                <FaEdit
                                                    className="text-primary dropdown-item"
                                                    style={{ cursor: 'pointer' }}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <FaTrashAlt
                                                className="text-danger dropdown-item"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => deleteProduct(index)}
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <p className="card-text">{product.productDescription}</p>
                                    <p className="card-text"><strong>Price:</strong> ${product.productPrice}</p>
                                    <p className="card-text"><strong>Category:</strong> {product.productCategory}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ShowProduct;
