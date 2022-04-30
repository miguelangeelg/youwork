import React from "react";
import carousel1 from '../../../../assets/img/home/carousel1.png'
import carousel2 from '../../../../assets/img/home/carousel2.png'
import carousel3 from '../../../../assets/img/home/carousel3.png'
import carousel4 from '../../../../assets/img/home/carousel4.png'

const CarouselHome = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade desktopStyle"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="some" src={carousel1} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img alt="some" src={carousel2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img alt="some" src={carousel3} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img alt="some" src={carousel4} className="d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselHome;
