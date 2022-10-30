import React from 'react';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import { Blog } from '../../components';
import './blogs.css'

function Blogs() {
  return (
    <div className='id__design-blogs section__padding' id='blogs'>
      <div className='id__design-blogs_top'>
        <h5>Reacent Blogs</h5>
        <a href='#blogs'>View All</a>
      </div>
      <div className='id__design-blogs_container'>
        <Blog blogImage={blog1} blogText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus vero aperiam vitae! Sit illum at illo maxime, temporibus atque.'/>
        <Blog blogImage={blog2} blogText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus vero aperiam vitae! Sit illum at illo maxime, temporibus atque.'/>
        <Blog blogImage={blog3} blogText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus vero aperiam vitae! Sit illum at illo maxime, temporibus atque.'/>
      </div>
    </div>
  )
}

export default Blogs;