import React from "react";
import bgimg2 from "../assets/images/bgimg2.webp";
import video from "../assets/images/video.webp";

const World = () => {
  return (
    <div
      className="container pt-lg-5 position-relative z-1 mt-lg-5 "
      data-aos="zoom-in"
      id="OurTeam"
    >
      <div className="pt-lg-5">
        <p className="text-white ff-flex fw-bold fs-md1 lh-62 text-center pt-5 pb-lg-3 mb-0">
          A rich, inhabited, and licensable world.
        </p>
        <div className="d-flex justify-content-center position-relative">
          <img src={bgimg2} alt="bgimg2" className="img-border w-100" />
          <a href="">
            <img src={video} alt="video" className="video-pos" />
          </a>
        </div>
        <p className="ff-flex fw-normal fs-xs lh-24 text-center text-white op-70 pt-3">
          {" "}
          Illustrated with original artwork and a cinematic score, destined not
          only for mobile and desktop gaming but{" "}
          <span className="d-block">
            also for film and television, events, merchandising, and
            partnerships.
          </span>
        </p>
      </div>
      <div className="orange-ellipse"></div>
    </div>
  );
};

export default World;
