import React from "react";
import Couch from "../../assets/images/couch.png";
import Line from "../../layouts/Line";
import IntroProduct from "./product/IntroProduct";
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
              <div className="hero-img-wrap">
                <img src={Couch} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
              </p>
              <p>
                <a href="/shop" className="btn">
                  Explore
                </a>
              </p>
            </div>
            <IntroProduct/>
          </div>
        </div>
      </div>
      <section className="section_feedback pb-5">
        <div className="container">
          <div className="list-feedback">
            <h2 className="text-center pt-5">Khách hàng nói gì về chúng tôi</h2>
            <p className="block-desc text-center mb-4">
              Hơn 1.000 khách hàng đã hài lòng về dịch vụ và sản phẩm của chúng
              tôi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
