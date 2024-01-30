import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";

export default function Carousel() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <Slider ref={sliderRef} {...settings}>
              {carouselData.map((val, index) => (
                <div className="carousel-item" key={index}>
                  <img className="w-100" src={val.img} alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                        {val.subtitle}
                      </h6>
                      <h1 className="display-3 text-white mb-4 animated slideInDown">
                        {val.title}
                      </h1>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        {val.btn1}
                      </a>
                      <a
                        href=""
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                      >
                        {val.btn2}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={previous}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={next}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
