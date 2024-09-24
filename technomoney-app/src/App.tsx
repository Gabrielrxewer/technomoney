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

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <MainContent />
    </Router>
  );
};

const MainContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<StockTable />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default App;
