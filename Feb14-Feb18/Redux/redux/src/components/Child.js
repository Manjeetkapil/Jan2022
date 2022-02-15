import React from 'react'
import { useDispatch } from "react-redux";
import { Increment, IncrementByTwo, Decrement, DecrementByTwo } from "../action";

function Child() {
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Here Starts Child component which can also update same state without passing the values.
        </h2>
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
    </div>
  )
}

export default Child