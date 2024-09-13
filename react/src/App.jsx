import './App.css';
import Producto from '../components/navbar';
import Footer from '../components/footer';
import Cart from './pages/Cart';
import { StrictMode } from 'react';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/pizza';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Profile } from './pages/profile';
import Header from '../components/Header';
import { NotFound } from './pages/NotFound';
import { CartProvider } from './context/cartcontext';
import { UserProvider, useUser } from './context/UserContext'; 

// Componente para manejar las rutas protegidas
function ProtectedRoutes() {
  const { token } = useUser(); 

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={token ? <Navigate to='/' /> : <Register />} />
      <Route path='/login' element={token ? <Navigate to='/' /> : <Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/pizza/:id' element={<Pizza />} />
      <Route path='/profile' element={token ? <Profile /> : <Navigate to='/login' />} />
      <Route path='/logout' element={<Profile />} />  
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <StrictMode>
        <BrowserRouter>
          <CartProvider>
            <Producto />
            <Header />
            <ProtectedRoutes /> 
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </StrictMode>
    </UserProvider>
  );
}

export default App;

