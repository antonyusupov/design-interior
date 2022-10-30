import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar section__padding'>
      <div className='navbar__logo'>
        <h3>ID Design</h3>
      </div>
      <div className='navbar__links'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#about'>About Us</a></p>
          <p><a href='#features'>Features</a></p>
          <p><a href='#testimonials'>Testimonials</a></p>
          <p><a href='#blogs'>Blogs</a></p>
          <p><a href='#contact'>Contact Us</a></p>
      </div>
      <div className='navbar__icons'>
        <p><FaShoppingCart size={25} /></p>
        <p><CgProfile size={25}/></p>
      </div>
      <div className='navbar__responsive-menu '>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar__links-mobile scale-up-tr'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#about'>About Us</a></p>
            <p><a href='#features'>Features</a></p>
            <p><a href='#testimonials'>Testimonials</a></p>
            <p><a href='#blogs'>Blogs</a></p>
            <p><a href='#contact'>Contact Us</a></p>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;