import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  )
}