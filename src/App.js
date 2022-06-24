import logo from "./logo.svg";

import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import CounterApp from "./pages/CounterApp";
import TodoApp from "./pages/TodoApp";
import Home from "./pages/Home";
import { RequiredAuth } from "./HOC/RequiredAuth";
import Login from "./Components/Login";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/counterapp" element={<CounterApp />} />
        <Route
          path="/todoapp"
          element={
            <RequiredAuth>
              <TodoApp />
            </RequiredAuth>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
