import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from '../../components/card/Card';
import Testimonial from '../../components/testimonial/Testimonial';
import chair1 from '../../assets/chair1.png';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import './testimonials.css';



function Testimonials() {
  return (
    <div className='id__design-testimonials section__padding' id='testimonials'>
      <div className='id__design-cards'>
        <Card title = 'T-Chair' text= 'Build by designers from best material by designers from best material' image= {chair1}/>
        <Card title = 'Retro Chair' text= 'Build by designers from best material by designers from best material' image= {chair1}/>
        <Card title = 'Royal Chair' text= 'Build by designers from best material by designers from best material' image= {chair1}/>
      </div>
      <div className='id__design-testimonial'>
        <div className='id__design-testimonial_right-arrow'>
          <FaArrowLeft size={25}/>
        </div>
        <Testimonial testimonialText='The best design and great designers working hard. Making everything as designed on pictures very greatfull for product!' personName='John Doe' aboutPerson='Programmer 10. 11. 2022' profilePic= {profile1}/>
        <Testimonial testimonialText='The best design and great designers working hard. Making everything as designed on pictures very greatfull for product!' personName='Mary Jane' aboutPerson='Teacher 07. 09. 2022' profilePic= {profile2}/>
        <Testimonial testimonialText='The best design and great designers working hard. Making everything as designed on pictures very greatfull for product!' personName='Jane Smith' aboutPerson='Coach 15. 05. 2022' profilePic= {profile3}/>
        <div className='id__design-testimonial_left-arrow'>
        <FaArrowRight size={25} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;