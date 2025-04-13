import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Form from './Form';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home/>} />

        {/* Outras rotas podem ser adicionadas assim: */}
        {/* <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
