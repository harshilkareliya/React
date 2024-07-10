import AddData from './AddData';
import Display from './Display';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { database } from './Config';
import { ref, set, onValue } from "firebase/database";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [displayData, setdisplayData] = useState([])


  const handleSubmit = (id,name, email,password, e) => {
    e.preventDefault()
    const newRef = ref(database, `users/${id}`)
    set(newRef, {id, name, email, password })
      .then(() => {
        alert('Data add succefully')
      }).catch((err) => {
        alert('Data add unsuccefully')
      })
    
  }

  useEffect(() => {

    const Ref = ref(database, 'users');
    onValue(Ref, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      if (data) {
        const userlist = Object.keys(data).map((key) => ({
          name: key,
          ...data[key]
        }))
        console.log("after " + userlist)
        setdisplayData(userlist)
      }
      else {
        setdisplayData([])
      }
    });
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AddData handleSubmit={handleSubmit} data={displayData} />}></Route>
          <Route path='/data' element={<Display data={displayData} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
