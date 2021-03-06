import React from 'react'
import Rating from "../components/Rating"
import drinks from "../alcohol"
import { Link } from "react-router-dom"

const ProductScreen = ({ match }) => {

    const drink = drinks.find(p => p._id === match.params.id)
    console.log(drink)
    return (
        <div>
            <Link className="button" to='/'>
                Back to previous page
            </Link>
            
        </div>
    )
};

export default ProductScreen;