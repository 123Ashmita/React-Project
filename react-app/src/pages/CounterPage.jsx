// src/features/counter/CounterPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

export default function CounterPage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
    </div>
  );
}
