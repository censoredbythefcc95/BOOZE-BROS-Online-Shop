import React from 'react'
import Rating from "../components/Rating"
import drinks from "../alcohol"
import { Link } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"

const ProductScreen = ({ match }) => {

    const drink = drinks.find(p => p._id === match.params.id)
    console.log(drink)
    return (
        <div>
            <Link className="btn btn-dark my-4" to='/'>
                Back to previous page
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={drink.image} alt={drink.name} fluid />
                </Col>
                <Col md={2}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4>{drink.name}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={drink.rating} 
                             text={`${drink.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${drink.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {drink.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Row>
                                <Col>
                                    <h4>Price: </h4>
                                </Col>
                                <Col>
                                    <h3>${drink.price}</h3>
                                </Col>
                            </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                            <Row>
                                <Col>
                                    <h4>Availability: </h4>
                                </Col>
                                <Col>
                                    {drink.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block"
                                        type='button'>
                                        ADD TO CART
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default ProductScreen;