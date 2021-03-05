import React from 'react'
import { Card } from "react-bootstrap"
import Rating from "../components/Rating"
import { Link } from 'react-router-dom'
// Object destructing for props being passed. Checkpoint for tonight.
const Drink = ({ drink }) => {
    return (
        <Card className='my-4 p-4 rounded'>
            <Link to={`/drink/${drink._id}`}>
                <Card.Img src={drink.image} />
            </Link>

            <Card.Body>
                 <Link to={`/drink/${drink._id}`}>
                     <Card.Title as='div'>
                         <h4>{drink.name}</h4>
                     </Card.Title>
                 </Link>

            <Card.Text as='div'>
                <Rating value={drink.rating} 
                        text={`${drink.numReviews} reviews`} 
                />
            </Card.Text>
                
            <Card.Text as='h4'>
                 <h4>${drink.price}</h4>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Drink;