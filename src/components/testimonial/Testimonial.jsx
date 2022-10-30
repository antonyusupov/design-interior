import React from 'react';
import './testimonial.css';

function Testimonial({ testimonialText, profilePic, personName, aboutPerson}) {
  return (
      <div className='id__design-testimonial_content'>
        <div className='id__design-testimonial-content_paragraph'>
          <div className='id__design-testimonial-content_text'>
            <h4>Testimonialls</h4>
            <p>{testimonialText}</p>
          </div>
          <div className='id__design-testimonial-person'>
            <div className='id__design-testimonial-persons_image'>
              <img src={profilePic} alt="profilepicture" />
            </div>
            <h5>{personName}</h5>
            <p>{aboutPerson}</p>
          </div>
        </div>
      </div>
  )
}

export default Testimonial;