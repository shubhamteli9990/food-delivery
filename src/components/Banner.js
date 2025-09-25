// src/components/home/Banner.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = () => {
  return (
    <>
      <style>
        {`
          .carousel .slide img {
            height: 400px;
            object-fit: cover;
          }
          .carousel-container{
             margin-bottom: 40px;
          }
        `}
      </style>
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src={process.env.PUBLIC_URL + "/images/banner1.jpg"} alt="Banner Food List" />
          </div>
          <div>
            <img src="/images/banner2.jpg" alt="Special Offers Banner" />
          </div>
          <div>
            <img src="/images/banner3.jpg" alt="Restaurant Banner" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default BannerCarousel;