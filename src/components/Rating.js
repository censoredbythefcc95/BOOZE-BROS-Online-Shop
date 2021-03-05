import React from 'react'

const Rating = ({ value, text }) => {
    return (
        <div>
            <span>
                <i className={value >= 1 ? 'fas fa-star'
                : value >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 1 ? 'fas fa-star'
                : value >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 1 ? 'fas fa-star'
                : value >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 1 ? 'fas fa-star'
                : value >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>

            <span>
                <i className={value >= 1 ? 'fas fa-star'
                : value >= 0.5 ? 'fas fa-star-half-alt'
                : 'far fa-star'}></i>
            </span>
        </div>
    )
}

export default Rating;