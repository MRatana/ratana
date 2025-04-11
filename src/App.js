import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';

function App() {
  return (
    <div className="app-container"> {/* Added a container for styling */}
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article' element={<Article />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/animate' element={<AnimatedCodingSetup />} />
          <Route path='/animation' element={<Animation />} />
          <Route path='/welcome' element={<Welcome />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;





