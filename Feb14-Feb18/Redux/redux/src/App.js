import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { Increment, IncrementByTwo, Decrement, DecrementByTwo } from "./action";
import "./App.css";
import Child from "./components/Child";
function App() {
  const ourState = useSelector((state) => state.firstReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The current Value is {ourState} which is getting updated using Redux</h1>
      <br />
      <div className="listbuttons">
        <button className="button" onClick={() => dispatch(Increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(Decrement())}>
          -
        </button>
        <button className="button" onClick={() => dispatch(IncrementByTwo())}>
          +2
        </button>
        <button className="button" onClick={() => dispatch(DecrementByTwo())}>
          -2
        </button>
      </div>
      <hr />
      <Child></Child>
    </div>
  );
}

export default App;
