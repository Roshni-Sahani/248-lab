import React from "react";
import { useState } from "react";

const Form = () => {
  return (
    <div className="">
      <div className="form-bg min-vh-100 py-lg-5 my-lg-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-8 d-flex justify-content-center justify-content-lg-start ps-lg-2"
              data-aos="zoom-in"
            >
              <div className="form-border cards box bg-transparent w-100">
                <p
                  className="text-white ff-flex fw-bold fs-md1
                 lh-62 pb-md-4 mb-0"
                >
                  Get updated with us
                </p>
                <div className="d-md-flex justify-content-between gap-4 w-100">
                  <div className="w-md-50">
                    <p className="text-white fw-medium fs-xs lh-18  py-2 mb-0">
                      Frist Name
                    </p>
                    <input
                      type="text"
                      placeholder="Park Seijun"
                      className="form-btn w-100 ff-flex"
                    />
                  </div>
                  <div className="w-md-50">
                    <p className="text-white fw-medium fs-xs lh-18 mb-0  py-2">
                      Last Name
                    </p>
                    <input
                      type="text"
                      placeholder="Sejiun"
                      className="form-btn w-100"
                    />
                  </div>
                </div>
                <div className="d-md-flex justify-content-between gap-4 pt-md-4">
                  <div className="w-md-50">
                    <p className="text-white fw-medium fs-xs lh-18 mb-0  py-2">
                      Phone Number
                    </p>
                    <input
                      type="tel"
                      placeholder="+12 5858526478"
                      className="form-btn w-100 text-white"
                    />
                  </div>
                  <div className="w-md-50">
                    <p className="text-white fw-medium fs-xs lh-18 mb-0 py-2">
                      Email
                    </p>
                    <input
                      type="text"
                      placeholder="Park@458@Gmail.com"
                      className="form-btn w-100"
                    />
                  </div>
                </div>
                <sapn className="d-flex pt-3 gap-2">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8672 0.442871H2.86719C1.75719 0.442871 0.867188 1.34287 0.867188 2.44287V16.4429C0.867188 17.5429 1.75719 18.4429 2.86719 18.4429H16.8672C17.9772 18.4429 18.8672 17.5429 18.8672 16.4429V2.44287C18.8672 1.34287 17.9772 0.442871 16.8672 0.442871ZM7.86719 14.4429L2.86719 9.44287L4.27719 8.03287L7.86719 11.6129L15.4572 4.02287L16.8672 5.44287L7.86719 14.4429Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-white ff-flex fw-normal">
                    By sending this form I confirm that I have read and accept
                    the{" "}
                    <sapn className="fw-semibold">
                      Privacy <sapn className="d-block">Policy</sapn>
                    </sapn>
                  </p>
                </sapn>
                <button className="fs-xs fw-medium ff-flex lh-18 sub-btn text-white mt-md-3">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in">
              <p className="text-white ff-flex fw-normal fs-sm1 lh-28 text-center text-lg-start mb-0 pt-2">
                Stay updated
              </p>
              <p className="ff-flex fw-normal fs-xs lh-24 text-white op-70 text-center text-lg-start pt-2 pt-lg-0">
                At 248 Labs, our constant pursuit is to build engaging games
                that spared joy. Don’t hesitate to reach out to us with your
                thoughts and messages -{" "}
                <span className="d-block">we are all ears!</span>
              </p>
              <p className="ff-flex fs-sm1 fw-normal lh-28 text-white text-center text-lg-start mb-0">
                Address
              </p>
              <p className="ff-flex fw-normal fs-xs lh-24 text-white op-70 text-center text-lg-start">
                390 Orchard Road, 03-07, Palais Renaissance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
