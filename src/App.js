import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './components';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Products,
  SingleProduct,
} from './pages';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
