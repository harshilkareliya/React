import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Sec1 from './Components/Sec1';
import Sec2 from './Components/Sec2';
import Sec3 from './Components/Sec3';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Footer/>
    </div>
  );
}

export default App;
