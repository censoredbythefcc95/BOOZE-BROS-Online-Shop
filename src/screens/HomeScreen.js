import React, { useEffect } from 'react'
// import drinks from '../alcohol' // pulling data from proxy, alcohol.js no longer needed at this time. 
import { Row, Col } from 'react-bootstrap'
import Drink from "../components/Drink"
import { listDrinks } from "../actions/drinkActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message" ;
import LoadingSpinner from "../components/Loading";


const HomeScreen = () => {
    // Setting State for my drinks.
    const dispatch = useDispatch()
    const drinkList =useSelector(state => state.drinkList)
    const { loading, error, drinks } = drinkList
    // useEffect hook passed in, dispatch pushing listDrinks.
    useEffect(() => {
        dispatch(listDrinks())
    }, [dispatch]);


    return (
        <>
            <h1>Latest Booze in Stock</h1>
            {loading ? (<LoadingSpinner />) : error ? (<Message variant='danger'>{error}</Message>) : <Row> 
                {drinks.map(drink => (
                    <Col sm={12} md={6} lg={3} xl={3}>
                        <Drink drink={drink} />
                    </Col>
                ))}
            </Row>}
            

        </>
    )
}

export default HomeScreen;