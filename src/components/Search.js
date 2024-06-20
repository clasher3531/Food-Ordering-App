import React from "react";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
const Search = ({
  InitialListOfResturants,
  listOfResturant,
  setListOfResturant,
}) => {
  const [inputVal, setInputVal] = useState("");
  const { userLoggedIn, setUserName } = useContext(UserContext);
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
    let filteredList = InitialListOfResturants.filter((resturant) => {
      return resturant.info.name.toLowerCase().includes(inputVal.toLowerCase());
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
      <input
        value={userLoggedIn}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
    </React.Fragment>
  );
};

export default Search;
