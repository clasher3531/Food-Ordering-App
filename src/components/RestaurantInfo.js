import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";
import ShimmerResInfo from "./ShimmerResInfo";
import { RES_INFO_URL } from "../utils/constants";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const resData = await fetch(RES_INFO_URL + resId);
    const restaurantInfo = await resData.json();
    setResInfo(restaurantInfo.data);
  };

  if (!resInfo) {
    return <ShimmerResInfo />;
  }

  const { info } = resInfo?.cards[2]?.card?.card;
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <div className="res-info-main">
      <h1>{info.name}</h1>
      <p>{info.cuisines.join(", ")}</p>
      <div className="cost_and_rating">
        <p>{info.costForTwoMessage}</p>
        <p className="rating">{info.avgRating} stars</p>
      </div>
      <hr></hr>
      {cards.map((menuCard, index) => {
        const menus = menuCard?.card?.card?.itemCards;
        if (menus && menus.length > 0) {
          return (
            <ul key={index}>
              <h2 className="menu-title">{menuCard.card.card.title}</h2>
              <br></br>
              {menus.map((menu) => (
                <RestaurantMenuList
                  key={menu.card.info.id}
                  list={menu.card.info}
                />
              ))}
            </ul>
          );
        }
      })}
    </div>
  );
};

export default RestaurantInfo;
