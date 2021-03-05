import React from 'react'
import { Card } from "react-bootstrap"
// Object destructing for props being passed. Checkpoint for tonight.
const Drink = ({ drink }) => {
    return (
        <Card className='my-4 p-4 rounded'>
            <a href={`/drink/${drink._id}`}>
                <Card.Img src={drink.image} />
            </a>

            <Card.Body>
                 <a href={`/drink/${drink._id}`}>
                     <Card.Title as='div'>
                         <h4>{drink.name}</h4>
                     </Card.Title>
                 </a>

            <Card.Text as='div'>
                <div className='my-4'>
                    {drink.rating} from {drink.numReviews} reviews
                </div>
            </Card.Text>
                
            <Card.Text as='h4'>
                 <h4>${drink.price}</h4>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Drink;