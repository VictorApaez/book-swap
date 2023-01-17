import "../styles/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header.js";

function App() {
  return (
    <Router>
      <div className="app" data-theme="dark">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
