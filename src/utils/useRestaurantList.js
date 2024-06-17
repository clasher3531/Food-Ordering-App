import { useState, useEffect } from "react";

const useRestaurantList = () => {
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

  return [listOfResturant, InitialListOfResturants, setListOfResturant];
};

export default useRestaurantList;
