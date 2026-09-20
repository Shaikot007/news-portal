import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import LoginRegister from './pages/LoginRegister';
import CreateNews from './pages/CreateNews';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh', paddingBottom: '40px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}