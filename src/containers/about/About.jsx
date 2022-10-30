import React from 'react';
import chair1 from '../../assets/chair1.png';
import chair2 from '../../assets/chair2.png';
import chair3 from '../../assets/chair3.png';
import './about.css'

function About() {
  return (
    <div className='id__design-about section__padding' id='about'>
      <div className='id__design-about_content'>
        <h4>Exellent Material</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui vitae asperiores, alias dolorem quidem?</p>
      </div>
      <div className='id__design-about_products'>
        <div>
          <img src={chair1} alt="chair" />
          <h5>T-Check Chair</h5>
          <p>$ 75.99</p>
        </div>
        <div>
          <img src={chair2} alt="chair" />
          <h5>Royal Chair</h5>
          <p>$ 90.99</p>
        </div>
        <div>
          <img src={chair3} alt="chair" />
          <h5>Retro Chair</h5>
          <p>$ 125.00</p>
        </div>
      </div>
    </div>
  )
}

export default About;