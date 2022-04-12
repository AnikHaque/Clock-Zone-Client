import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
const Blogs = () => {
 
    return (
        <div>
        <h1 className="text-center mb-5 fw-bold menu-heading">Our Latest Blogs</h1>
            <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
      <Link to="/watches">
      <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/1_536x345_crop_center.jpg?v=1559111690" className='img-fluid'>
      </img>
      </Link>
     <Link> <h6 className='text-center text-dark'>Best Fashion Smartwatch Collection</h6></Link>
     <p className='text-center'>by Clock-Zone</p>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
      <Link to="/watches">
      <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/5_536x345_crop_center.JPG?v=1559116786" className='img-fluid'>
      </img>
      </Link>
      <Link> <h6 className='text-center text-dark'>Nice Leather Watch Collection</h6></Link>
      <p className='text-center'>by Clock-Zone</p>
    </div>
    <div class="col-12 col-sm-12 col-md-4 col-lg-4">
     <Link to="/watches">
      <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/3_536x345_crop_center.jpg?v=1559116680" className='img-fluid'></img>
      </Link>
      <Link> <h6 className='text-center text-dark'>Super Duper Watch & Accessories Collections</h6></Link>
      <p className='text-center'>by Clock-Zone</p>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Blogs;