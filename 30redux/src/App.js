import './App.css';
import { increment,decrement } from './redux/action';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>{dispatch(increment())}}>+</button> 
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  );
}

export default App;
