import React from 'react';
import './card.css';

function Card({ title, text, image}) {
  return (
    <div className='id__design-card'>
      <div className='id__dsign-card_image'>
        <img src={image} alt="chair" />
      </div>
      <div className='id_design-card_content'>
        <h5>{ title }</h5>
        <p>{ text }</p>
        <a href="#testimonials">Read More</a>
      </div>
    </div>
  )
}

export default Card;