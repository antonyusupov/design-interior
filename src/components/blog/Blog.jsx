import React from 'react';
import './blog.css';

function Blog({blogImage, blogText}) {
  return (
    <div className='id__design-blog'>
      <div className='id__design-blog_image'>
        <img src={blogImage} alt="blogimage" />
      </div>
      <p>{blogText}</p>
    </div>
  )
}

export default Blog;