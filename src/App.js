 import "./styles.css";
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";

export default function App() {
  const styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "500",
      textDecoration: isActive ? "underline" : "none"
    };
  };

  return (
    <div className="App">
      <nav className="primary-nav">
        <NavLink style={styles} to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink style={styles} to="/search" className="nav-item">
          Search
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  );
}
