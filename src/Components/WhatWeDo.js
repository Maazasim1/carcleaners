import React from 'react'
import './WhatWeDo.scss'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";


library.add(faArrowLeft,faArrowRight);

export default function WhatWeDo() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
        return images;
    }

    const images = importAll(require.context('./SocialMedia', false, /\.(png|jpe?g|svg)$/));

    const Slidersettings = {
        
        dots: false,
        infinite: true,
        centerMode:true,
        centerPadding: "30px",
        slidesToShow: 3,
        speed:500,
        className:'sliderSM',
        prevArrow:  <FontAwesomeIcon icon="arrow-left" color='white' size='100px'/>,
        nextArrow: <FontAwesomeIcon icon='arrow-right' className="arrowRight" />,
        keyboard:true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            centerPadding:'20px'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className='WhatWeDo' id='Services'>



  
        <h1 className='headerServices'>Our Services</h1>
            <Slider 
                {...Slidersettings}
            >
                <div>
                    <img src={images['SM1.jpeg']} className='pic pic1' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM2.jpeg']} className='pic pic2' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM3.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM4.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM5.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM6.jpeg']} className='pic pic3'alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM7.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM8.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM9.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM10.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM11.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM12.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM13.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM14.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM15.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
                <div>
                    <img src={images['SM16.jpeg']} className='pic pic3' alt='Offer'/>
                </div>
            
            </Slider>
        </div>

    )
}
