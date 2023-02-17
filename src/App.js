import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
          <BrowserRouter>
          <Header />
            <Routes>
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route element={<NotFound />} />
              </>
            </Routes>
          </BrowserRouter>
        );
}

export default App;
