import React from 'react';
import features from '../../assets/features.jpg';
import bottomImage from '../../assets/about.jpg';
import {FaArrowRight} from 'react-icons/fa';
import './features.css'

function Features() {
  return (
    <div className='id__design-main section__padding' id='features'>
    <div className='id__design-features'>
      <div className='id__design-features_content'>
        <div>
          <h4>Why Choose Us?</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, perspiciatis alias? Corrupti assumenda inventore sint rem, totam maiores laborum magni quidem odio omnis doloribus eos?</p>
        </div>
        <div>
          <h4>Easy To Shop</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, perspiciatis alias? Corrupti assumenda inventore sint rem, totam maiores laborum magni quidem odio omnis doloribus eos?</p>
        </div>
        <div>
          <h4>Free & Fast shipping</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, perspiciatis alias? Corrupti assumenda inventore sint rem, totam maiores laborum magni quidem odio omnis doloribus eos?</p>
        </div>
        <div>
          <h4>Free returns</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, perspiciatis alias? Corrupti assumenda inventore sint rem, totam maiores laborum magni quidem odio omnis doloribus eos?</p>
        </div>
      </div>
      <div className='id__design-features_image'>
        <img src={features} alt="kitchen" />
      </div>
    </div>
    <div className='id__features-bottom'>
      <div className='id__features-bottom_image'>
        <img src={bottomImage} alt="livingroom" />
      </div>
      <div className='id__features-bottom_content'>
        <div className='id__features-bottom_content-p1'>
          <h3>We Help You Make Modern Interior Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit accusamus nobis magni omnis delectus neque.</p>
        </div>
        <div className='id__features-bottom_content-p2'>
          <p> <span>{<FaArrowRight size={15}/>}</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi, ipsa consectetur aspernatur reiciendis accusamus odit quasi optio in autem?</p>
          <p>  <span>{<FaArrowRight size={15}/>}</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, officiis sint alias consectetur enim odio expedita adipisci, sunt mollitia, deserunt eaque. Vel at quas repellat illo dolorem rem nobis quod.</p>
          <p>  <span>{<FaArrowRight size={15}/>}</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni nobis laudantium eum molestias, deleniti quod ipsa officia quidem itaque?</p>
          <p>  <span>{<FaArrowRight size={15}/>}</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel consequuntur aut error, facere quo?</p>
        </div>
        <div className='id__features-bottom_content-btn'>
          <button type='button'>Explore</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features;