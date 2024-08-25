import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "1" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
 
  const handleSearch =()=>{
       navigate("/hotels", {state:{ destination, date, options  }})
  }



  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerlistItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flites</span>
          </div>
          <div className="headerlistItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
          </div>
          <div className="headerlistItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerlistItem active">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>

        { type!=="list" &&
          <>
            <h2 className="headerTitle">
              A Lifetime of descount? Its's Genius{" "}
            </h2>
            <p className="headerDesc">
              Get reward for Your travels - unlock instance saving of 10% or
              make with a free hotel Mansrower account
            </p>
            <button className="headerBtn">Sign In / Register</button>

            <div className="headerSearch">
              <div className="headerSarchItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerIcone"
                />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                  onChange={e=> setDestination(e.target.value)}
                />
              </div>
              <div className="headerSarchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcone" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSerchText"
                >{`${format(date[0].startDate, "dd-MM-yyyy")} to
             ${format(date[0].endDate, "dd-MM-yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSarchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcone" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSarchItem"
                >
                  {`${options.adult} adult | ${options.children} children | ${options.room} room `}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItems">
                      <span className="optionsText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionsCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionsCounterButton"
                          onClick={() => handleOption("adult", "1")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionsText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionsCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionsCounterButton"
                          onClick={() => handleOption("children", "1")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItems">
                      <span className="optionsText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionsCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionsCounterButton"
                          onClick={() => handleOption("room", "1")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="headerSearchBtn headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
