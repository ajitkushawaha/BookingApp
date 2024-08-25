import React from "react";
import "./hotel.css";
import Navbar from "./../../componetns/navbar/Navbar";
import Header from "./../../componetns/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MailList from './../../componetns/mailList/MailList';
import Footer from "../../componetns/footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740&t=st=1669790751~exp=1669791351~hmac=cab6d005d74fd6fd1b45b59fa37676b70db9f183d7d008c2f910d03d828bc052",
    },

    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/0c/b3/a4/twin-standard-room--v7121071.jpg?w=1000&h=800&s=1",
    },

    {
      src: "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740&t=st=1669790751~exp=1669791351~hmac=cab6d005d74fd6fd1b45b59fa37676b70db9f183d7d008c2f910d03d828bc052",
    },

    {
      src: "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740&t=st=1669790751~exp=1669791351~hmac=cab6d005d74fd6fd1b45b59fa37676b70db9f183d7d008c2f910d03d828bc052",
    },

    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/0a/18/36/a6/one-bedroom-executive-suite--v989.jpg",
    },

    {
      src: "https://pix10.agoda.net/hotelImages/503/503300/503300_15073017110033359737.jpg?s=1024x768",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("left")}
            />
        <div className="sliderWapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Book or Reserve now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Tonk road st 125 Durga pura</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 from center
          </span>
          <span className="hotelPriceHightLight">
            Book a stay over $114 at this property and get a free taxi
          </span>
          <div className="hotelImage">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelDetailTitle">
                Stay in the heart of the jaipur city
              </h1>
              <p className="hotelDesc">
                Locate a 5-minut walk from St. Durha pura, Bala ji Tower has
                accommodations with air conditioning and free WiFi. the unit
                cone with hardwood floors and features a fully ewuipped. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                similique odit dolorem, commodi eaque error unde, provident
                vitae asperiores, reprehenderit non sapiente. Optio consequuntur
                odit a magnam fugiat adipisci quis? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Officia quo doloribus quas
                excepturi quidem fuga? Accusantium atque repellat reiciendis
                incidunt qui omnis! Dolorem molestias illo necessitatibus natus
                similique exercitationem numquam?
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night Stay</h1>
              <span>
                located in the real heart of jaipur city. this propery has a
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9-night)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
