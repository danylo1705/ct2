import React from 'react';
import './testimonials.css'


import slider1 from '../../../images/app_main/testimonials/slider1.png'
import slider2 from '../../../images/app_main/testimonials/slider2.png'
import slider3 from '../../../images/app_main/testimonials/slider3.png'
import Carousel from 'nuka-carousel/lib/carousel';



export default function Testimonials () {
    return (
        <div className="testimonials" id='testimonials'>
        <h2>Testimonials</h2>
        <div className="slider">
        <Carousel className='testim_slider' slidesToShow={1}>
          <div className='slider_elem'>
            <img src={slider1} alt="" />
            <h2>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live."</h2>
            <p>Chiranjit Hazarika - Web Designer</p>
          </div>
            <div className='slider_elem'>
            <img src={slider2} alt="" />
            <h2>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live."</h2>
            <p>Alex White - Lawyer</p>
          </div> 
          <div className='slider_elem'>
            <img src={slider3} alt="" />
            <h2>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Separated they live."</h2>
            <p>John Deb - Manager</p>
          </div> 
          </Carousel>
          
        


        </div>
  </div>
    )
}

