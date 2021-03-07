import React, { useState, useEffect } from 'react'
import drinks from '../alcohol'
import { Row, Col } from 'react-bootstrap'
import Drink from "../components/Drink"
 


const HomeScreen = () => {
    // Setting State for my drinks.
    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        console.log('Testing useEffect')
    });
    
    return (
        <>
            <h1>Latest Products in Stock</h1>
            <Row> 
                {drinks.map(drink => (
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <Drink drink={drink} />
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default HomeScreen;