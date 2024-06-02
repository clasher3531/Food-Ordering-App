import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { useState, useEffect } from "react";

const Body = () => {
  var [InitialListOfResturants, setInitialListOfResturants] = useState([]);
  const [listOfResturant, setListOfResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.18260&lng=78.02560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    var dataJson = await data.json();
    InitialListOfResturants =
      dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfResturant(InitialListOfResturants);
    setInitialListOfResturants(InitialListOfResturants);
  };

  return (
    <div className="body">
      <Search
        InitialListOfResturants={InitialListOfResturants}
        listOfResturant={listOfResturant}
        setListOfResturant={setListOfResturant}
      />
      {listOfResturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-list">
          {listOfResturant.map((resturant) => (
            <ResturantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
