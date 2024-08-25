import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="SearchItem">
      <img
        src="https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740&t=st=1669790751~exp=1669791351~hmac=cab6d005d74fd6fd1b45b59fa37676b70db9f183d7d008c2f910d03d828bc052"
        alt=""
        className="siImg"
      />

      <div className="siDes">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment woth Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio 1 bathroom 21m squre 1 full bed
          </span>
          <span className="siCancel">Free Cancellation</span>
          <span className="siCancelSubtitle">
            You can cancel latter, so lock in this grate price today 
          </span>
      </div>
      <div className="siDetail">
        <div className="siRating">
            <span>Excelent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTaxts">
            <span className="siPrice">&123</span>
            <span className="siTaxOp">Include all taxces and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
