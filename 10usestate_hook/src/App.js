import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './Header';
import Leftpanel from './Leftpanel';
import Middlepanel from './Middlepanel';
import Rightpanel from './Rightpanel';

function App() {
  return (
    <div className="App">
      <Header/>
      <br></br>
      <div className='main d-flex justify-content-around'>
        
        <Leftpanel/>
        <Middlepanel/>
        <Rightpanel/>
      </div>
    </div>
  );
}

export default App;
