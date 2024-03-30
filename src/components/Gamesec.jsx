import React from "react";
const ProductData = [
  {
    heading: "World Building",
    para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision",
    aos: "zoom-out-up",
  },
  {
    heading: "Game Design",
    para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination.",
    aos: "zoom-out-down",
  },
  {
    heading: "Art and Sound",
    para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.",
    aos: "zoom-out-up",
  },
];
const Gamesec = () => {
  const card = ProductData.map((ProductData, i) => (
    <div
      key={i}
      className="col-lg-4 col-md-6 pt-lg-5 col-12 d-flex justify-content-center"
    >
      <div
        className="common-card box position-relative overflow-hidden z-1"
        data-aos={ProductData.aos}
      >
        <p className="text-white ff-flex fw-bold fs-md lh-38">
          {ProductData.heading}
        </p>
        <p className="ff-flex fs-xs lh-24 fw-normal max-width-lg-311 text-white op-70">
          {ProductData.para}
          <div className="ellipse1"></div>
        </p>
      </div>
    </div>
  ));
  return (
    <div className="position-relative  z-1 mt-5" id="About Us">
      <div className="container mt-5">
        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <span className="over-btn" data-aos="fade-up">
                <span className="color-gradient ff-flex fw-normal fs-xs lh-19  mb-0">
                  DOERS OVER TALKERS
                </span>
              </span>
            </div>
            <p
              className="text-white fw-bold fs-md1 ff-flex lh-62 pt-18 text-center text-lg-start"
              data-aos="fade-down"
            >
              Game <span className="d-block">First.Always.</span>
            </p>
          </div>
          <div className="col-lg-6">
            <p
              className="fw-medium ff-flex fs-sm lh-21 text-white mb-0 text-center text-lg-start"
              data-aos="fade-down"
            >
              This is difficult
            </p>
            <p
              className="ff-flex  fw-normal lh-24 fs-xs lightgry mb-0 max-width-516 pt-2 text-center text-lg-start mx-auto mx-lg-0"
              data-aos="fade-up"
            >
              Web3 Games have a notoriously high barrier-to-entry for casual
              gamers who make up the vast majority of players. “Link your
              wallet” before gameplay is not just off-putting, it’s boring.
              We’re solving that with{" "}
              <span className="fw-semibold">world-class storytelling,</span>{" "}
              world-building, game design, art and sound. And fun.
            </p>
          </div>
        </div>
        <div className="row justify-content-center py-5">{card}</div>
      </div>
      <p className="fs-lg1 ff-flex text-white op-6 fw-bold txt-position d-none d-md-block">
        About Us
      </p>
      <div className="purple-ellipse d-none d-md-block"></div>
    </div>
  );
};

export default Gamesec;
