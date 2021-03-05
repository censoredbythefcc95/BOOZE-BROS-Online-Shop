import React from 'react'
import drinks from '../alcohol'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products in Stock</h1>
            <Row>
                {drinks.map(drink => (
                    <Col>
                        <h2>{drink.name}</h2>
                        <h2>{drink.category}</h2>
                        <h2>{drink.description}</h2>
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default HomeScreen;