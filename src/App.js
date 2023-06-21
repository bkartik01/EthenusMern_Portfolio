import './App.css';
import Hero from './components/Hero/Hero';
import Particle from './components/Particle';
// import {Row, Col, Container} from 'react-bootstrap'


function App() {
  return (
    <div className='App'>
      <div className='particles'>
    <Particle/>
    </div>
    <div className='content'>
    <Hero/>
    </div>
    </div>
  );
}

export default App;
