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
