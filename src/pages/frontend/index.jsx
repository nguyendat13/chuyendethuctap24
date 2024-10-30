import React from "react";
import Line from "../../layouts/Line";
import IntroProduct from "./product/IntroProduct";
import Banner from "./banner/Banner";
const index = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span clsas="d-block">Design Studio</span>
                </h1>
                <Line />
              </div>
            </div>
            <div className="col-lg-7">
              <Banner/>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="container">
          <div className="row">
            <IntroProduct/>
          </div>
        </div>
      </div>
      <section className="section_feedback pb-5">
        <div className="container">
          <div className="list-feedback">
            <h2 className="text-center pt-5">What Our Customers Say About Us</h2>
            <p className="block-desc text-center mb-4">
            More than 1,000 customers have been satisfied with our services and products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
