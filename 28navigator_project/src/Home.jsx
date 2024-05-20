import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import { Link } from 'react-router-dom';

function Home({addMovie, editMovie, updateMovie}) {


    return (
        <div>
            <h1>Medicine Management</h1>
            <MovieForm addMovie={addMovie} editMovie={editMovie} updateMovie={updateMovie} />
        </div>
    )
}

export default Home
