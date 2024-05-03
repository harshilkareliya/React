// import logo from './logo.svg';
import './App.css';
import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App row">
      <div className='col-6'>
        <Product1/>
      </div>
      <div className='col-6'>
        <Product2/>
      </div>
    </div>
  );
}

export default App;
