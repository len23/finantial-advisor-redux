import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RiskSelection from './features/risksSelection/RiskSelection';
import Recomendations from './features/recomendations/Recomendations';

function App() {
  return (
    <Router>
        <Header/>
        <Container className="mt-5">
        <Routes>
          <Route exact path='/' element={<RiskSelection />}/>
          <Route exact path='/recomendations' element={<Recomendations />} />
        </Routes>
        </Container>
    </Router>
  );
}

export default App;
