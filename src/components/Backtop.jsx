import React, { useState } from "react";
import { Arrows } from "./Icon";
const Backtop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className="position-fixed bounce  back-button justify-content-center align-items-center "
        onClick={scrollToTop}
        style={{
          display: visible ? "flex " : "none",
        }}
      >
      
          <span>
            <svg
              width="27"
              height="27"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0835 17.5V34.1667H14.9168V17.5H0.333496L17.0002 0.833374L33.6668 17.5H19.0835Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
    
    </div>
  );
};

export default Backtop;
