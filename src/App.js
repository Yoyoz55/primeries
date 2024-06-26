import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Kalpi from "./components/Kalpi";
import TableVoted from "./components/TableVoted";
import StatisticVotes from "./components/StatisticVotes";
import StatisticUsers from "./components/StatisticUsers";
import TableUser from "./components/TableUser";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TableStatistic from "./components/TableStatistic";
import { PERMISSION } from "./Enum";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="primeries/" element={<Login />} />
        <Route path="/Login" element={<Login />} />

        <Route
          exact
          path="/tableUser"
          element={<PrivateRoute permissionUser={[PERMISSION.REPONSIBLE]} />}
        >
          <Route exact path="/tableUser" element={<TableUser />} />
        </Route>
        <Route
          exact
          path="/kalpi"
          element={
            <PrivateRoute
              permissionUser={[PERMISSION.KALPI, PERMISSION.MANAGER]}
            />
          }
        >
          <Route exact path="/kalpi" element={<Kalpi />} />
        </Route>
        <Route
          exact
          path="/Table"
          element={<PrivateRoute permissionUser={[PERMISSION.MANAGER]} />}
        >
          <Route exact path="/Table" element={<TableVoted />} />
        </Route>
        <Route
          exact
          path="/Statistic"
          element={<PrivateRoute permissionUser={[PERMISSION.MANAGER]} />}
        >
          <Route exact path="/Statistic" element={<StatisticVotes />} />
        </Route>
        <Route
          exact
          path="/StatisticUsers"
          element={<PrivateRoute permissionUser={[PERMISSION.MANAGER]} />}
        >
          <Route exact path="/StatisticUsers" element={<StatisticUsers />} />
        </Route>
        <Route
          exact
          path="/TableUsers"
          element={<PrivateRoute permissionUser={[PERMISSION.MANAGER]} />}
        >
          <Route exact path="/TableUsers" element={<TableStatistic />} />
        </Route>
        <Route element={<Login />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
