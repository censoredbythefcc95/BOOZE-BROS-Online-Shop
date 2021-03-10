import React, { useState, useEffect } from 'react'
import Rating from "../components/Rating"
// import drinks from "../alcohol"
import { Link } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import { listDrinkDetails, } from "../actions/drinkActions";

const ProductScreen = ({ history, match }) => {

    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const drinkDetails = useSelector(state => state.drinkDetails)
    const { loading, error, drink } = drinkDetails
    useEffect(() => {
      dispatch(listDrinkDetails(match.params.id))
    }, [dispatch, match]); // dependency array results in useEffect warning. Probably not a big deal for now.

        const cartHandler = () => {
            history.push(`/cart/${match.params.id}?quantity=${quantity}`)
        }
    return (
        <div>
            <Link className="btn btn-dark my-4" to='/'>
                Back to previous page
            </Link>
                {loading ? <h2>Loading drink</h2> : error ? <h2>${error}</h2> : 
                (  <Row>
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

                                    {drink.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col> Quantity </Col>
                                                <Col>
                                                    <Form.Control 
                                                     as="select"
                                                     value={quantity}
                                                     onChange={(e) => setQuantity(e.target.value)}>
                                                    {[...Array(drink.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x +1}>{x + 1} </option>
                                                    ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                <ListGroup.Item>
                                    <Button className="btn-block"
                                            type='button'
                                            disabled={drink.countInStock === 0}
                                            onClick={cartHandler}>
                                            ADD TO CART
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

                )}
        </div>
    )
};

export default ProductScreen;