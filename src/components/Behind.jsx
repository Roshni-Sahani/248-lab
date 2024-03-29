import React from "react";
import menimg from "../assets/images/menimg.webp";
import girlimg from "../assets/images/girlimg.webp";
import men2 from "../assets/images/men2.webp";
import men3 from "../assets/images/men3.webp";
import girl2 from "../assets/images/girl2.webp";
import men4 from "../assets/images/men4.webp";
import men5 from "../assets/images/men5.webp";
import men6 from "../assets/images/men6.webp";

const ProductData = [
  {
    img: menimg,
    heading: "James Vuong",
    text1: "(Co-CEO)",
    para: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an",
    para1:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    aos: "zoom-in-down",
  },
  {
    img: girlimg,
    heading: "Tricia Yong",
    text1: "(Co-CEO)",
    para: "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
    para1:
      "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
    aos: "zoom-out-up",
  },
  {
    img: men2,
    heading: "Kevin Li",
    text1: "(CFO)",
    para: "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
    para1:
      "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.",
    aos: "zoom-in-down",
  },
  {
    img: men3,
    heading: "Ryan Ang",
    text1: "(Lorem Ipsum)",
    para: "Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi ",
    para1:
      "products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.",
    aos: "zoom-out-up",
  },
  {
    img: girl2,
    heading: "Dylan",
    text1: "(Executive Producer)",
    para: "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
    para1: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
    aos: "zoom-in-down",
  },
  {
    img: men4,
    heading: "Ralf",
    text1: "(Lorem Ipsum)",
    para: "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
    para1:
      "Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
    aos: "zoom-out-up",
  },
  {
    img: men5,
    heading: "Jordan Stratford",
    text1: "(Creative Director)",
    para: "Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development",
    para1: "for television with the world’s largest streaming producer.",
    aos: "zoom-in-down",
  },
  {
    img: men6,
    heading: "Jae Sik Choi",
    text1: "(Lorem Ipsum)",
    para: "Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB",
    para1:
      "Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.",
    aos: "zoom-out-up",
  },
];
const Behind = () => {
  const card = ProductData.map((ProductData) => (
    <div className="col-lg-6 col-12 pt-4">
      <div
        className="long-card w-100 position-relative overflow-hidden z-1 p x-3"
        data-aos={ProductData.aos}
      >
        <div className="d-xl-flex">
          <div className="d-flex justify-content-center">
            <img
              className="img-border w-236 h-198"
              src={ProductData.img}
              alt="img-1"
            />
          </div>
          <div className="ps-lg-2">
            <div className="d-flex pt-3 pt-lg-0 justify-content-center justify-content-xl-start text-nowrap">
              <p className="ff-flex fw-semibold fs-xl text-white mb-0">
                {ProductData.heading}
              </p>
              <p className="color-gradient ff-flex fw-normal fs-xs ps-1 pe-3 mb-0 text-nowrap">
                {ProductData.text1}
              </p>
            </div>
            <div>
              <p className="ff-flex fw-normal fs-xs lh-24 text-white op-70 pt-2 text-center text-xl-start">
                {ProductData.para}
              </p>
            </div>
          </div>
        </div>
        <p className="fw-normal fs-xs ff-flex lh-24 mb-0 text-white op-70 pt-xl-2 text-center text-xl-start">
          {ProductData.para1}
        </p>
        <div className="ellipse2"></div>
      </div>
    </div>
  ));
  return (
    <div className="position-relative z-1 overflow-hidden">
      <div className="container mt-lg-5 pt-lg-5">
        <div className="pt-lg-5 mt-lg-5">
          <div className="d-flex justify-content-center">
            <button className="over-btn">
              <p className="color-gradient ff-flex fw-normal fs-xs lh-19 mb-0">
                Our Team
              </p>
            </button>
          </div>
          <p className="text-white fw-bold fs-md1 lh-62 ff-flex text-center mb-0 py-3">
            Behind our expertise
          </p>
          <div className="row">{card}</div>
        </div>
      </div>
      <p className="fs-lg1 ff-flex text-white op-6 fw-bold txt-position1 d-none d-md-block">
        Our Team
      </p>
      <div className="behind-ellipse"></div>
      <div className="behind-ellipse2"></div>
    </div>
  );
};

export default Behind;
