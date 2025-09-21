import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PujaPage from "./components/PujaPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import About from "./components/About";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puja" element={<PujaPage />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/destinationwedding" element={<Destination/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
