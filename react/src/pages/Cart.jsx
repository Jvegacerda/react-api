import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/cartcontext'; 
import { useUser } from '../context/UserContext';

function Cart() {
  const { cartItems, increasePizza, decreasePizza, getTotalAmount } = useCart(); 
  const { token } = useUser(); 

  const [message, setMessage] = useState(""); 

  const totalAmount = getTotalAmount();

  const purchasedPizzas = cartItems
    .filter(item => item.count > 0)
    .map(item => (
      <li key={item.id}>
        {item.name} ({item.count}) - ${item.price * item.count}
      </li>
    ));

  const checkout = async () => {
    if (!token) {
      setMessage("No estás autenticado.");
      return false; // Detiene el proceso si no hay token
    }
    if (cartItems.length === 0 || !cartItems.some(item => item.count > 0)) {
      setMessage("No hay pizzas en el carrito.");
      return false; // Detiene el proceso si no hay pizzas en el carrito
  }

    const response = await fetch('http://localhost:5000/api/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ cart: cartItems }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setMessage("Compra realizada con éxito");
      return true;
    } else {
      const errorData = await response.json();
      console.error('Error en el checkout:', errorData);
      setMessage(`Error al realizar la compra: ${errorData.message || 'Error desconocido'}`);
      return false;
    }
  };

  const handleCheckout = async () => {
    const success = await checkout();
    if (!success) {
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito de compras</h2>
      <h1 className="mb-4">Pizzas</h1>
      <Row>
        {cartItems.map((item) => (
          <Col key={item.id} md={2} className="mb-4 d-flex">
            <div className="card p-3 text-center">
              <img src={item.img} alt={item.name} className="card-img-top mb-3" />
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">Precio: ${item.price}</p>
              <div className="d-flex justify-content-center">
                <Button variant="primary" className="mx-2" onClick={() => increasePizza(item.id)}> + </Button>
                <Button variant="secondary" className="mx-2" onClick={() => decreasePizza(item.id)}> - </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <h3 className="mt-2">Pizzas:</h3>
      <ul>
        {purchasedPizzas.length > 0 ? purchasedPizzas : <li>Sin pizzas en el carrito</li>}
      </ul>
      <h2 className="mt-4">Monto total: $ {totalAmount.toLocaleString()}</h2>

      <Button className="mt-4" variant="success" onClick={handleCheckout}>🛒 Comprar</Button> 
      {/* deshabilitar boton de carrito si no hay token o pizzas, cambiado por mensaje sde error
      <Button className="mt-4" variant="success" disabled={!token || cartItems.length === 0} onClick={handleCheckout}>🛒 Comprar</Button> */}

      {message && <div>{message}</div>}
    </div>
  );
}

export default Cart;

