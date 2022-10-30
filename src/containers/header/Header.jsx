import React from 'react';
import headerImage from '../../assets/header.png';
import './header.css'

function Header() {
  return (
    <div className='id__design-header section__padding' id='home'>
      <div className='id__design-header_content'>
        <h2>Modern Interior Design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quae veritatis cupiditate, consectetur cumque ad distinctio magni laboriosam officia molestias.</p>
        <div className='id__header_content-btn'>
          <button type='button' className='shop__now-btn'>Shop Now</button>
          <button type='button' className='explore__btn'>Explore</button>
        </div>
      </div>
      <div className='id__design-header_image'>
        <img src={headerImage} alt='sofa'/>
      </div>
    </div>
  )
}

export default Header;