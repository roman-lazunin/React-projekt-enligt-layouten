import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Uppgift2 from './pages/Uppgift2';
import Uppgift3 from './pages/Uppgift3';
import Sidebar from './components/Sidebar';
import './App.css';
import './styles/page.css';

function App() {
  return (
    <Router>
      <Navbar />
      <header className="app-header">
        <h1>F25D Borås YH - React kurs</h1>
      </header>
      <div className="app__content">
        <Sidebar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/uppgift2" element={<Uppgift2 />} />
            <Route path="/uppgift3" element={<Uppgift3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;