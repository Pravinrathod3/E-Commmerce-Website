import React from "react";
import "../public/hero.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Perfume1 from "./assets/image1.jpg";
import Perfume2 from "./assets/image2.jpg";
import Perfume3 from "./assets/image3.jpg";

const imagelist=[
    {  
        id: 1,
       img: Perfume1 
     }, 
     {
        id: 2,
        img: Perfume2
     },
     {
        id: 3,
        img: Perfume3
     }
    
    ]


    const Hero = ({ handleclick }) => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };
      
        return (
          <Slider {...settings}>
            {imagelist.map((data) => (
               <div className="sliderimage">
                
                <img src={data.img} alt={`Slide`} />
               
              </div>
            ))}
          </Slider>
        );
      };
      


export default Hero;