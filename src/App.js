import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import composants
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import LoginPage from "./components/pages/LoginPage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
