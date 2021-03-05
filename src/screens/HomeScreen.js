import React from 'react'
import drinks from '../alcohol'
import { Row, Col } from 'react-bootstrap'
import Drink from "../components/Drink"

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products in Stock</h1>
            <Row>
                {drinks.map(drink => (
                    <Col>
                        <Drink drink={drink} />
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default HomeScreen;