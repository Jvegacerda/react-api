import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardPizza(props) {
  const { name, img, ingredients, price, onAddToCart } = props; 

  return (
    <Card className='mt-4' style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <h6>Ingredientes</h6>
        <Card.Text>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <hr />
        <h5 className='ms-5'>Precio: ${price}</h5>
        <Button variant="outline-dark" className="ms-5">Ver Más 👀</Button>
        <Button variant="dark" className="ms-5" onClick={onAddToCart}>Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
}
