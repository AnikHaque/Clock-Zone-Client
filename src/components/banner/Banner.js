import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100 banner-image"
      src="https://i.ibb.co/qMd96XB/home1-slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='fw-bold classic'>New Smartwatch</h1>
      {/* <p className='fs-5 classic-p'><i>Complete your everyday look with a stylish watch</i></p> */}
      <h3 className='classic-p'><i>Moto 360 <span className='generation fw-bold'>Generation 2</span></i></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-fluid banner-image w-100"
      src="https://i.ibb.co/k8NtFGp/home1-slide2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className='fw-bold classic'>Sony Smartwatch</h1>
    <h3 className='classic-p'><i>New Black <span className='generation fw-bold'>Generation 2</span></i></h3>
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
    </div>
  );
};

export default Banner;