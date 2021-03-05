import React from 'react'
import { Card } from "react-bootstrap"
// Object destructing for props being passed. Checkpoint for tonight.
const Drink = ({ drink }) => {
    return (
        <Card>
            <a href={`/drink/${drink._id}`}>
                <Card.Text src={drink.description} />
                
            </a>
        </Card>
    )
}

export default Drink;