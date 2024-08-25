import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740&t=st=1669790751~exp=1669791351~hmac=cab6d005d74fd6fd1b45b59fa37676b70db9f183d7d008c2f910d03d828bc052"
          alt="image"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <a href="#">Ajmer</a>
          <span>Properties for rent</span>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?w=740&t=st=1669790857~exp=1669791457~hmac=a75a3f3e50ffd1c6c6e8b432858b8c4f9584b4c25fdfd2eab52651477fa02a47"
          alt="image"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <a href="#">Ajmer</a>
          <span>Properties for rent</span>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=740&t=st=1669790928~exp=1669791528~hmac=6453f8be2a2dbcede6b9d7ac82703f239d46e53c67795ffe2ce1b767f63a95c3"
          alt="image"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <a href="#">Ajmer</a>
          <span>Properties for rent</span>
        </div>
      </div>
      
    </div>
  );
};

export default Featured;
