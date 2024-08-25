import React from "react";
import "./list.css";
import Header from "../componetns/header/Header";
import Navbar from "../componetns/navbar/Navbar";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../componetns/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [ destination, setDestination ] = useState(location.state.destination);
  const [ date, setDate]  = useState(location.state.date);
  const [ openDate, setOpenDate]  = useState(false);
  const [ options, setOptions]  = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItems">
              <label htmlFor="dest">Destination</label>
               <input type="text" name="dest" placeholder={destination} />
            </div>
            <div className="lsItems">
              <label htmlFor="check">Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && <DateRange onChange={(item) => setDate([item.selection])}  
                minDate={new Date()} 
                ranges={date}
                />}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Adult
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.child} />
              </div>
              <div className="lsOptionItems">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
             <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
