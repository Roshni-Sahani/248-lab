import React from "react";

const Next = () => {
  return (
    <div className="next-bg d-flex justify-content-center align-items-center flex-column mt-5 px-3 px-lg-0 overflow-x-clip">
      <p
        className="text-white ff-flex fw-bold lh-62 fs-md1 text-center"
        data-aos="zoom-in"
      >
        What’s Next
      </p>
      <p
        className="ff-flex fw-semibold fs-xs lh-24 text-center text-white"
        data-aos="zoom-in"
      >
        92% of gamers have never even tried a Web3 game. We’re going to change
        that.
      </p>
      <p
        className="fw-normal fs-xs lh-24 ff-flex text-center text-white op-70"
        data-aos="zoom-in"
      >
        {" "}
        248Labs The market is worth about a gazillion dollars, so whatever those
        stats were, that goes here.
      </p>
      <div className="d-flex justify-content-center">
        <button className="ff-flex text-white fw-bold lh-28 fs-sm1 try-btn">
          Try to keep up
        </button>
      </div>
    </div>
  );
};

export default Next;
