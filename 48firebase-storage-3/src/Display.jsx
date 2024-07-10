// Display.jsx
import React from 'react';
import Navbar from './Navbar';
import './Display.css';

function Display({ data }) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {data.map((users) => (
                        <div key={users.name} className="col-md-4">
                            <div className="user-card">
                                <div className="user-info">
                                    <div className="user-name">{users.name}</div>
                                    <div className="user-email">{users.email}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Display;
