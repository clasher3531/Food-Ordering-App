import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);
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
    let filteredList = resList.filter((resturant) => {
      return (
        resturant.info.name.substring(0, inputValLength).toLowerCase() ===
        inputVal.toLowerCase()
      );
    });
    setListOfResturant(filteredList);
  }
  return (
    <div className="body">
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
      <div className="res-list">
        {listOfResturant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
