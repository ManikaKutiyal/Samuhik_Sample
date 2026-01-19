import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marquee from './components/layout/Marquee';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Imports
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import NotFound from "./pages/NotFound";
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Marquee />
        <Navbar />

        {/* The main content area changes based on the URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;