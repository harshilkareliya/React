import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Header';
import MyAbout from './MyAbout';
import Resume from './Resume';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      
{/* <Router>
  <Routes>
  <Route path='/' element={<Header/>}/>
  <Route path='/MyAbout' element={<MyAbout/>}/>
  <Route path='/Resume' element={<Resume/>}/>
  <Route path='/Service' element={<Services/>}/>
  <Route path='/Portfolio' element={<Portfolio/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  </Routes>
</Router> */}
      <Header/>
    </div>
  );
}

export default App;
