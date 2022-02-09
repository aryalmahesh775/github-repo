import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import DetailPage from "./components/DetailPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/:author/:rName" element={<DetailPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
