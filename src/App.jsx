import './styles/App.css';
import './styles/Fuentes.css';
import './styles/Scroll.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Rutas from './components/Rutas';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Rutas />
      </Router>
    </>
  );
}

export default App;