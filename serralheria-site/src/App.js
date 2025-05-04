import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Form from './Form';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppPopup from './WhatsAppPopup';

function App() {
  return (
    <Router>
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
