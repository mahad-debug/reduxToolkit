import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, changeByAmount } from "../state/reducer";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  //
  const [data, setdata] = useState(0);
  //
  let newdata = Number(data) || 0;
  //
  let resetfunc = () => {
    setdata(0);
    dispatch(reset());
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>up</button>
      <button onClick={() => dispatch(decrement())}>down</button>
      <button onClick={resetfunc}>reset</button>
      <input value={data} onChange={(e) => setdata(e.target.value)} />
      <button onClick={(e) => dispatch(changeByAmount(newdata))}>Add</button>
    </>
  );
};

export default Counter;
