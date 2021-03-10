import React, { useEffect } from 'react'
// import drinks from '../alcohol' // pulling data from proxy, alcohol.js no longer needed at this time. 
import { Row, Col } from 'react-bootstrap'
import Drink from "../components/Drink"
import { listDrinks } from "../actions/drinkActions";
import { useDispatch, useSelector } from "react-redux";
 


const HomeScreen = () => {
    // Setting State for my drinks.
    const dispatch = useDispatch()
    // useEffect hook passed in, dispatch pushing listDrinks.
    useEffect(() => {
        dispatch(listDrinks())
    }, [dispatch]);


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