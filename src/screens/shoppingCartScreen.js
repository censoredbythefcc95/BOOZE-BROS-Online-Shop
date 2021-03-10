import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";
import { addToCart } from "../actions/cartActions";

const ShoppingCartScreen = ({ match, location, history }) => {
    const drinkId = match.params.id
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    useEffect(() => {
        if (drinkId) {
            dispatch(addToCart(drinkId, quantity))
        }
    }, [dispatch, drinkId, quantity])
    
    return (
        <>
            <div>Shopping Cart Screen Component</div>
        </>
    )
}

export default ShoppingCartScreen;