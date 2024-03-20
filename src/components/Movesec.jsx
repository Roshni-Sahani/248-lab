import React from "react";
import bgimg from "../assets/images/bgimg.webp";

const Movesec = () => {
  return (
    <div className=" pt-lg-5 mt-lg-5">
      <div className="container  position-relative z-1 mt-5">
        <div className="d-flex justify-content-center" data-aos="zoom-out">
          <img src={bgimg} alt="bgimg" className="img-border w-100" />
        </div>
        <div className="row mt-4">
          <div className="col-lg-4" data-aos="zoom-in-up">
            <div className="d-flex justify-content-center">
              <button className="over-btn1">
                <p className=" ff-flex fw-normal fs-sm lh-27 mb-0 ff-flex fw-bold fs-sm text-white lh-27">
                  name@domain.com
                </p>
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="ff-flex fw-bold fs-sm text-white lh-27 name-btn box mt-4">
                Make Your Move
              </button>
            </div>
          </div>
          <div className="col-lg-8" data-aos="zoom-in-down">
            <p className="ff-flex fw-normal fs-xs lh-24 max-w-793 lightgry text-center text-lg-start pt-2 pt-lg-0">
              Unveiled is a unique{" "}
              <span className="fw-semibold text-white">
                collectible card game
              </span>{" "}
              in which you gain fervour for your ventures, spending it on
              mercenaries, spies, automata, and influence.{" "}
            </p>
            <p className="f-flex fw-normal fs-xs lh-24 max-w-793 lightgry text-center text-lg-start">
              You play{" "}
              <span className="text-white fw-semibold">
                {" "}
                A rogue merchant trader
              </span>{" "}
              allied to a noble house, alongside your{" "}
              <span className="text-white fw-semibold">
                cryptid-humanoid companions
              </span>{" "}
              in a game of ambition and alliance, deception and miracles,
              manipulation and annihilation. Bells chime in the harbour, and
              markets are opening. Guards have swept the streets of the more
              obvious dangers.
            </p>
            <p className="text-white fw-semibold fs-xs ff-flex lh-24 text-center text-lg-start">
              What’s your next move?
            </p>
          </div>
        </div>
        <div className="purple-ellipse2"></div>
      </div>
    </div>
  );
};

export default Movesec;
