import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterDec } from "../store/Counter/action.js";
import { CounterInc } from "../store/Counter/action";
function CounterApp() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return <div>
      <h1>CounterApp:{count}</h1>
      <div>
          <button onClick={()=>dispatch(CounterInc())}>+</button>
          <button onClick={()=>dispatch(CounterDec())}>-</button>

      </div>
  </div>;
}

export default CounterApp;
