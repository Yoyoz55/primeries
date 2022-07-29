import logo from "./logo.svg";
import { Routes, Route } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Kalpi from "./components/Kalpi";
import TableVoted from "./components/TableVoted";
import StatisticVotes from "./components/StatisticVotes";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="primeries/Home" element={<Kalpi />} />
        <Route path="primeries/Table" element={<TableVoted />} />
        <Route path="primeries/Statistic" element={<StatisticVotes />} />
      </Routes>
    </div>
  );
}

export default App;
