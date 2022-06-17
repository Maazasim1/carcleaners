import React from "react";
import Slider from "react-slick";
import './Reviews.scss'
import Cards from './Card'
import r1 from './reviewImages/RI6.png'
import r2 from './reviewImages/RI9.PNG'
import r3 from './reviewImages/RI10.PNG'
import r4 from './reviewImages/RI11.PNG'
import r5 from './reviewImages/RI12.PNG'
import r6 from './reviewImages/RI13.PNG'
import r7 from './reviewImages/RI14.png'

  

function Reviews() {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30px",
      slidesToShow:4,
      speed: 500,
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
            centerMode:false,
            slidesToShow: 1.03,
            slidesToScroll: 2,
            initialSlide: 2,
            centerPadding:'30px'
          }
        },
        {
          breakpoint: 480,
          settings: {
              centerMode:false,
            slidesToShow: 1.09,
            slidesToScroll: 1,
            centerPadding: "10px",

          }
        }
      ]
    };

    
    return (
      <div className="wrapper" id='Testimonials'>
       <h1 className='headerReviews'>What our clients are saying about us</h1>
        <div className="sliderMas">

        <Slider {...settings}>
          <div>
            <Cards image={r1} color='#151a29' height='30rem' text="I've been using Car Cleaners for about the last one year, and I can't say I've had any complaints. My car is always fresh and squeaky clean, without all the chemicals that the other car washes use! They take their time cleaning it thoroughly, and believe me when I say this - they do a really good job." title='Nissan Dayz' />
          </div>
          <div>
          <Cards color='#151a29' image={r2} height='30rem' text="I have a terrible car and it's always dirty. I am so useless when it comes to cleaning my car, and I don't know what to do. Car Cleaners solved my problem! They cleaned my car and it looks amazing now! I don't have the energy to clean, but now that Car Cleaners is here, there's no reason for me not to" title='Subaru SRT' />

          </div>
          <div>
          <Cards color='#151a29' image={r3} height='30rem' text="Car Cleaners has the best car wash services and prices in Pakistan. Since I've been a regular customer, my car has never looked better and it only gets better with every visit. The staff is also really friendly and they always greet me with a smile." title='MG HS' />

          </div>
          <div>
          <Cards color='#151a29' height='30rem' text="I am a typical car owner. I use it daily and try to keep it clean but can't always find the time. Car Cleaners is the best for that! They are able to provide an excellent service at a very affordable price and I can leave them my car for a week and know that when I come back, my car is gonna be immaculately clean" title='Mark II Grande' image={r4} />

          </div>
          <div>
          <Cards color='#151a29' height='30rem' text="I am a frequent customer of Car Cleaners. I have always been impressed with their services and never had any complaints. I am sure that they offer the best car wash possible." title='Toyota Corolla' image={r5}/>

          </div>
          <div>
          <Cards color='#151a29' height='30rem' text="I've been using Car Cleaners for over a year now. They are the best car wash service in Pakistan. Their prices are competitive and the staff is very courteous. I usually come to them once a month for my car detailing and they never disappoint me, every time I get my car perfect clean and shiny!" title='EK Wagon' image={r6}/>

          </div>
          <div>
          <Cards color='#151a29' height='30rem' text="I am absolutely in love with Car Cleaners. All the other car wash services that I have tried felt cluttered & overwhelming. Car Cleaners, on the other hand, offers a seamless interface and generates the best quality of service...at the current price point, it's an absolute steal right now! I've been using it for a couple of months and can't imagine" title='Nissan Dayz' image={r7}/>

          </div>
          
         
    
        </Slider>
        </div>
      </div>
    );
  }

export default Reviews;