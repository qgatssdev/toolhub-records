import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
