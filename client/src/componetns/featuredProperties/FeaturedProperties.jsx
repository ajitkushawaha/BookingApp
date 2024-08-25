import React from "react";
import "./fearturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/399278891.jpg?k=97f5d4ee4e0084151cd2424f3be18421ab9e0ad47687eae212d6ff97f854e8d4&o="
          alt="image"
          className="fpimg"
        />
        <span className="fpName">Apart Hotel vasaliNagar</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from &#8377; 1500</span>
        <div className="fpRatting">
          <button>7.5</button>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/399278901.jpg?k=9185e859bc93024f30025505d52ea7f96c7ab096a0e1dab754cba6e10e792f3a&o="
          alt="image"
          className="fpimg"
        />
        <span className="fpName">Apart Hotel vasaliNagar</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from &#8377; 1500</span>
        <div className="fpRatting">
          <button>7.5</button>
          <span>Excelent</span>
        </div>
      </div>
      
      <div className="fpItem">
        <img
          src="https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740&t=st=1669790751~exp=1669791351~hmac=cab6d005d74fd6fd1b45b59fa37676b70db9f183d7d008c2f910d03d828bc052"
          alt="image"
          className="fpimg"
        />
        <span className="fpName">Hotele Bhagrotas</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from &#8377; 1500</span>
        <div className="fpRatting">
          <button>7.5</button>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://pix8.agoda.net/hotelImages/867/867693/867693_17072111540054594509.jpg?ca=6&ce=1"
          alt="image"
          className="fpimg"
        />
        <span className="fpName">Hotele Bhagrotas</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from &#8377; 1500</span>
        <div className="fpRatting">
          <button>7.5</button>
          <span>Excelent</span>
        </div>
      </div>

    </div>
  );
};

export default FeaturedProperties;
