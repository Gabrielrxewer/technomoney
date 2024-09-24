import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import StockTable from "./components/StockTable/StockTable";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<StockTable />} />
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
