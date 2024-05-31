import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(resList);
  function topRatedBtnClickHandler() {
    let filteredList = listOfResturant.filter(
      (resturant) => resturant.info.avgRating > 4.2
    );
    setListOfResturant(filteredList);
  }
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search Resturants"
        ></input>
        <div className="search-button">
          <button type="submit">Search</button>
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
