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
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <Drink drink={drink} />
                    </Col>
                ))}
            </Row>

        </>
    )
}

export default HomeScreen;