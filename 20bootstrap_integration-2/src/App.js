import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Components/Header';
import MyAbout from './Components/MyAbout';
import Resume from './Components/Resume';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyAbout/>
      <Resume/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
