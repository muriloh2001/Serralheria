import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Paginas/Portfolio';
import Form from './Paginas/Form';
import Home from './Paginas/Home';
import NavBar from './NavFooter/NavBar';
import Footer from './NavFooter/Footer';
import WhatsAppPopup from './Componentes/WhatsAppPopup';
import ScrollToTop from './Componentes/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <WhatsAppPopup/>
      <Footer/>
    </Router>
  );
}

export default App;
