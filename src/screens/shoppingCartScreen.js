import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message" ;
import LoadingSpinner from "../components/Loading";

const ShoppingCartScreen = ({ match, location, history }) => {
    const drinkId = match.params.id 
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect (() => {

        if (drinkId) {
            dispatch(addToCart(drinkId, quantity))
        }
    }, [dispatch, drinkId, quantity])

    const removeFromCartHandler = (id) => {
        console.log('remove from cart')
    }
  
    return (
        <>
            <Row>
                <Col md={8}>
                    <h2>My Cart</h2>
                    {cartItems.length === 0 ? <Message>Your Cart is empty... <Link to="/"></Link></Message> : (
                        <ListGroup variant="flush">
                            {cartItems.map(item => (
                            <ListGroup.Item key={item.drink}>
                            <Row>
                                <Col m={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/drink/${item.drink}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>{item.price}</Col>
                                <Col md={2}>
                                <Form.Control 
                                                     as="select"
                                                     value={quantity}
                                                     onChange={(e) => dispatch(addToCart(item.drink, Number(e.target.value)))}>
                                                    {[...Array(item.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x +1}>{x + 1} </option>
                                                    ))}
                                                    </Form.Control>    
                                </Col>
                                <Col md={2}>
                                    <Button type="button" variant="light" 
                                    onClick={() => removeFromCartHandler(item.drink)}>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>
            </Row>
        </>
    )
}

export default ShoppingCartScreen;