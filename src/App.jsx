import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { NavBar } from './components/Nav';
import { Container } from 'react-bootstrap';
import { Main } from './components/Main/Main';

function App() {
  return (
    <Router>
      <Container fluid className='navContainer'>
        <NavBar />
      </Container>
        <Main/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
