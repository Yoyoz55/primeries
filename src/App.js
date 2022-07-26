import logo from "./logo.svg";
import { Routes, Route } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Kalpi from "./components/Kalpi";
import TableVoted from "./components/TableVoted";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Home" element={<Kalpi />} />
        <Route path="/Statistic" element={<TableVoted />} />
      </Routes>
    </div>
  );
}

export default App;
