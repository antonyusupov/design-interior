import React from 'react';
import { FaCalendarAlt, FaFacebookF, FaTwitter, FaPinterest, FaPhoneSquareAlt } from "react-icons/fa";
import contactImage from '../../assets/contact.png';
import './contact.css'

function Contact() {
  return (
    <div className='id__design-contact section__padding' id='contact'>
      <div className='id__design-contact_inputs'>
        <div className='id__design-contact_input-container'>
          <div className='id__design-contact_header'>
            <FaCalendarAlt size={25} color='var(--main-color)'/>
            <h4>Send Us Email</h4>
          </div>
          <div className='id__design-contact_send-email'>
            <input type='text' placeholder='Fullname'/>
            <input type='email' placeholder='Email'/>
          </div>
          <button type='button'>Send</button>
        </div>
        <div className='id__design-contact_image-container'>
          <img src={contactImage} alt="couch" />
        </div>
      </div>
      <div className='id_design-contact_info'>
        <div className='id_design-contact_info-texts'>
          <h3>Info</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla, corrupti cum eveniet illum fugiat iste placeat ullam tenetur recusandae minima totam quasi aliquid? Odio expedita praesentium facere animi fugiat?</p>
          <div className='id_design-contact_info-texts_social'>
            <FaFacebookF size={25} color='var(--main-color)'/>
            <FaTwitter size={25} color='var(--main-color)'/>
            <FaPinterest size={25} color='var(--main-color)'/>
            <FaPhoneSquareAlt size={25} color='var(--main-color)'/>
          </div>
        </div>
        <div className='id_design-contact_info-links_container'>
          <div className='id_design-contact_info-links'>
            <p><a href='#contact'>About</a> </p>
            <p><a href='#contact'>Contact</a> </p>
            <p><a href='#contact'>Testimonials</a> </p>
            <p><a href='#contact'>Features</a> </p>
          </div>
          <div className='id_design-contact_info-links'>
            <p><a href='#contact'>Cards</a> </p>
            <p><a href='#contact'>Blogs</a> </p>
            <p><a href='#contact'>Designs</a> </p>
            <p><a href='#contact'>Designers</a> </p>
          </div>
          <div className='id_design-contact_info-links'>
            <p><a href='#contact'>Shipment</a> </p>
            <p><a href='#contact'>Dates</a> </p>
            <p><a href='#contact'>Arts</a> </p>
            <p><a href='#contact'>Access</a> </p>
          </div>
          <div className='id_design-contact_info-links'>
            <p><a href='#contact'>Catalog</a> </p>
            <p><a href='#contact'>Menu</a> </p>
            <p><a href='#contact'>Places</a> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;