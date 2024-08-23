import Card from 'react-bootstrap/Card';
import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <Card className="bg-dark text-white">
    <Card.Img src="../src/assets/img/image.webp" alt="Card image" className='imagen' />
    <Card.ImgOverlay className='texto'>
      <Card.Title className='display-6'>¡Pizzeria Mamma Mia!</Card.Title>
      <Card.Text>
        ¡Tenemos las mejores pizzas que podras encontrar!
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
  )
}
