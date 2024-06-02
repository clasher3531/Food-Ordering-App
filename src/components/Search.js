import React from "react";
import { useState } from "react";

const Search = ({
  InitialListOfResturants,
  listOfResturant,
  setListOfResturant,
}) => {
  const [inputVal, setInputVal] = useState("");
  function topRatedBtnClickHandler() {
    let filteredList = listOfResturant.filter(
      (resturant) => resturant.info.avgRating > 4.2
    );
    setListOfResturant(filteredList);
  }
  function changeInputHandler(event) {
    setInputVal(event.target.value);
  }
  function searchButtonClickHandler() {
    var inputValLength = inputVal.length;
    let filteredList = InitialListOfResturants.filter((resturant) => {
      return (
        resturant.info.name.substring(0, inputValLength).toLowerCase() ===
        inputVal.toLowerCase()
      );
    });
    setListOfResturant(filteredList);
  }
  return (
    <React.Fragment>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search Resturants"
          value={inputVal}
          onChange={changeInputHandler}
        ></input>
        <div className="search-button">
          <button type="submit" onClick={searchButtonClickHandler}>
            Search
          </button>
        </div>
      </div>
      <button className="top-rated-btn" onClick={topRatedBtnClickHandler}>
        Top rated Resturants
      </button>
    </React.Fragment>
  );
};

export default Search;
