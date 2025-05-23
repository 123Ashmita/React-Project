import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link className="mr-4 text-blue-500" to="/">
          Home
        </Link>
        <Link className="text-blue-500" to="/counter">
          Counter
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </div>
  );
}

export default App;
