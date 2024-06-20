import React,{useState} from 'react'
import Navbar from './Navbar'
import './MovieForm.css';
import axios from 'axios'
function Addmovie() {

    const[newMovie, setnewMovie] = useState({
        title : '',
        genre : '',
        director : '',
        releaseyear : '',
        discription : ''
    })

    

    function handleChange(event){
        setnewMovie({...newMovie, [event.target.name] : event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8000/data',newMovie)
        .then(()=>{
            alert("add successflly")
        }) .catch((err)=>{
            alert(err)
        })
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h4 className="card-title mb-0">Movie Details Form</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Movie Title</label>
                                        <input type="text" name='title' onChange={handleChange} className="form-control" id="title" placeholder="Enter movie title" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="genre">Genre</label>
                                        <input type="text" name='genre' onChange={handleChange} className="form-control" id="genre" placeholder="Enter genre" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="director">Director</label>
                                        <input type="text" name='director' onChange={handleChange} className="form-control" id="director" placeholder="Enter director name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="year">Release Year</label>
                                        <input type="number" name='releaseyear' onChange={handleChange} className="form-control" id="year" placeholder="Enter release year" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea className="form-control" name='discription' onChange={handleChange} id="description" rows="3" placeholder="Enter brief description" required></textarea>
                                    </div><br />
                                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addmovie
