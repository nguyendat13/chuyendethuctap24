import React from "react";
import Pro1 from "../../assets/images/product-1.png";
import Pro2 from "../../assets/images/product-2.png";
import Pro3 from "../../assets/images/product-3.png";
import Cross from "../../assets/images/cross.svg";
import Couch from "../../assets/images/couch.png";
import Line from "../../layouts/Line";
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

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src={Pro1} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={Cross} className="img-fluid" />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src={Pro1} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={Cross} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src={Pro3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src={Cross} className="img-fluid" />
                </span>
              </a>
            </div>
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
