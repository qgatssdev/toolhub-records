import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import "./App.scss";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect } from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
