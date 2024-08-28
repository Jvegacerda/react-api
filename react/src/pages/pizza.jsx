import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react"



export default function Pizza(props) {


    const [pizzas , setPizzas] = useState({})
        useEffect(() => {
        fetchPizzas()
        }, [])
    
        const fetchPizzas = async () => {
        try {
            // Cambiar url de await fetch para error
            const response = await fetch('http://localhost:5000/api/pizzas/p001')
            if(!response.ok) {
                throw new Error('La api no funciona')
            }
            const data = await response.json()
            console.log(data)
            setPizzas(data)
            } catch (error) {
            console.error('Error del fetch' , error)
            }
        }

    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={pizzas.img} />
        <Card.Body>
          <Card.Title>{pizzas.name}</Card.Title>
          <Card.Text>Precio: $ {pizzas.price}</Card.Text>
            <Card.Text> 
            <ul>
            {pizzas.ingredients?.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li>
                    ))}
            </ul> 
            </Card.Text>
          <Card.Text>{pizzas.desc}</Card.Text>
          <Button variant="primary">🛒 Añadir al carrito</Button>
        </Card.Body>
      </Card>
    );
}