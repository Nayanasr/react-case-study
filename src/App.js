import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddCart from "./components/AddCart";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<AddCart/>} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
