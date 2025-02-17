import './App.css';
import './styles/components/layout/Footer.css'
import './styles/components/layout/Nav.css'
import './styles/components/layout/Header.css'
import './styles/components/pages/HomePage.css'
import './styles/components/pages/NosotrosPage.css'
import './styles/components/pages/ProductosPage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
