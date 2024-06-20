import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function Showmovie() {
    const [data, setData] = useState([])
    // const [loading, setloading] = useState(true)
    useEffect(() => {

        const fetching = async () => {
            try {
                // setloading(true)
                let responce = await axios.get('https://fakestoreapi.com/users')
                setData(responce.data)
                // setloading(false)
            } catch (err) {
                console.log(err)
                // setloading(false)
            }
        }
        
        // setTimeout(() => {
            fetching()
        // }, 3000);

    }, [])

  return (
    <div>
        <Navbar/>
        {
            data.map((e)=>(
                <>
                    <div key={e.id}>
                        <h1>{e.title}</h1>
                    </div>
                </>
            ))
        }
    </div>
  )
}

export default Showmovie
