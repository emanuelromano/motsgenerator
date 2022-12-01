import './styles/App.css';
import './styles/Fuentes.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Idioma from './components/Idioma';
import Generador from './components/Generador';
import Info from './components/Info';

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Idioma />} />
          <Route exact path='/languaje' element={<Idioma />} />
          <Route exact path='/generator' element={<Generador />} />
          <Route exact path='/info' element={<Info />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;

// http://reactcommunity.org/react-transition-group/
// https://blog.openreplay.com/how-to-add-animations-with-react-transition-group