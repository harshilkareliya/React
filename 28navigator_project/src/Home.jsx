import React from 'react';
import MovieForm from './MedicineForm';

function Home({addMovie, editMovie, updateMovie}) {
    return (
        <div>
            <h1>Medicine Management</h1>
            <MovieForm addMovie={addMovie} editMovie={editMovie} updateMovie={updateMovie} />
        </div>
    )
}

export default Home
