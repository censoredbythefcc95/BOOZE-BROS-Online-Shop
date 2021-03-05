import React from 'react'
// Ratings component. 
// className algo: if value is greater than or equal to value displayed,
//display className from react bootstrap icon(font-awesome)
//if it's greater than/equal to half the star(0.5)
//then display half the star with font-awesome half-alt
// if text exists for ratings reviews, display that text &&

const Rating = ({ value, text }) => {
    return (
        <div>
            <span>
                <i className={value >= 1 ? 'fas fa-star'
                : value >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 2 ? 'fas fa-star'
                : value >= 1.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 3 ? 'fas fa-star'
                : value >= 2.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 4 ? 'fas fa-star'
                : value >= 3.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 5 ? 'fas fa-star'
                : value >= 4.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Rating;