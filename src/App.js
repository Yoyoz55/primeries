import logo from "./logo.svg";
import { Routes, Route } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Kalpi from "./components/Kalpi";
function App() {
  document.body.setAttribute("dir", "rtl");

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Home" element={<Kalpi />} />
      </Routes>
    </div>
  );
}

export default App;
