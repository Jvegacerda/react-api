import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/cartcontext'; 

export default function Pizza() {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null); 
  const { addPizza } = useCart(); 

  useEffect(() => {
    fetchPizza(id);
  }, [id]);

  const fetchPizza = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener la pizza');
      }
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error('Error al obtener la pizza:', error);
    }
  };

  const handleAddToCart = () => {
    addPizza(pizza); 
  };

  if (!pizza) return <p>Cargando...</p>;

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>Precio: ${pizza.price}</Card.Text>
        <Card.Text>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text>{pizza.desc}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>🛒 Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}
