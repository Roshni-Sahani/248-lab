import React from "react";
import Slider from "react-slick";
import sliderimg1 from "../assets/images/sliderimg1.webp";
import twitch from "../assets/images/twitch.webp";
import games from "../assets/images/games.webp";
import grey from "../assets/images/grey.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidersec = () => {
  var settings = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container pt-lg-5 pb-lg-160 mt-5 overflow-hidden">
      <Slider {...settings} className="center-slider">
        <div className="px-5 d-flex align-items-end h-235 slider-hover">
          <img src={sliderimg1} alt="sliderimg1" />
        </div>
        <div className="px-5 d-flex align-items-end h-235">
          <img src={twitch} alt="twitch" />
        </div>
        <div className="px-5 d-flex align-items-end h-235">
          <img src={games} alt="games" />
        </div>
        <div className="px-5 d-flex align-items-end h-235">
          <img src={grey} alt="grey" />
        </div>
        <div className="px-5 d-flex align-items-end h-235">
          <img src={twitch} alt="twitch" />
        </div>
      </Slider>
    </div>
  );
};

export default Slidersec;
