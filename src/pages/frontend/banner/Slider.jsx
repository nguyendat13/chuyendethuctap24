import { useEffect, useState } from "react";
import BannerService from "../../../services/BannerService";
import { urlImage } from "../../../config";

const Slider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await BannerService.slideshow("slideshow");
      setBanners(result.banners);
      console.log(result.banners);  
    })();
  }, []);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          
          data-bs-slide-to="1"
          
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {banners &&
          banners.length > 0 &&
          banners.map((slider, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active">
                <div className="sli1">

                  <img
                    src={urlImage + "banners/" + slider.image}
                    className="d-block w-100"
                    alt="..."

                  />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="carousel-item ">
                       <div className="sli2">
                  <img
                    src={urlImage + "banners/" + slider.image}
                    className="d-block w-100 "
                    alt="..."
                  />
                  </div>
                </div>
              );
            }
          })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
