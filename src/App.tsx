import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
