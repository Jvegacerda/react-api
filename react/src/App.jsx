import './App.css';
import Producto from '../components/navbar';
import Footer from '../components/footer';
import Cart from './pages/Cart';
import { StrictMode } from 'react';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/pizza';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './pages/profile';
import Header from '../components/Header';
import { NotFound } from './pages/NotFound';
import { CartProvider } from './context/cartcontext';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <CartProvider>
          <Producto />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
{/* ** Por ahora mando logout a profile, cambiara probablemente  */}
            <Route path='/logout' element={<Profile />} />  
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
