import React from 'react'
import "../css/card.css"

const Card = ({title, img, alt}) => {
  return (
    <div className='card__container'>
        <p>{title}</p>
        <img src={img} alt={alt} />
    </div>
  )
}

export default Card