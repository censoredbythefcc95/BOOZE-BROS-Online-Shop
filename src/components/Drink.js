import React from 'react'
import { Card } from "react-bootstrap"
// Object destructing for props being passed. Checkpoint for tonight.
const Drink = ({ drink }) => {
    return (
        <Card>
            <a href={`/drink/${drink._id}`}>
                <Card.Img src={drink.image} />
                
            </a>
        </Card>
    )
}

export default Drink;