import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";
import ShimmerResInfo from "./ShimmerResInfo";
import { RES_INFO_URL } from "../utils/constants";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const [clonedResponse, setClonedResponse] = useState(null);
  const [isVegCheck, setIsVegCheck] = useState(false);
  const { resId } = useParams();
  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const resData = await fetch(RES_INFO_URL + resId);
    const restaurantInfo = await resData.json();
    setResInfo(restaurantInfo.data);
    const clonedResponseData = JSON.parse(JSON.stringify(restaurantInfo.data));
    setClonedResponse(clonedResponseData);
  };

  function vegOnlyChangeHandler(event) {
    if (event.target.checked) {
      const clonedMenuItemList =
        clonedResponse?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      if (clonedMenuItemList && clonedMenuItemList.length > 0) {
        clonedMenuItemList.forEach((cloneMenuList) => {
          const clonedMenu = cloneMenuList?.card?.card?.itemCards;
          if (clonedMenu && clonedMenu.length > 0) {
            const filteredCloneMenu = clonedMenu.filter((menu) => {
              return menu.card.info.isVeg;
            });
            cloneMenuList.card.card.itemCards = filteredCloneMenu;
          }
        });
        setClonedResponse(clonedResponse);
      }
      setIsVegCheck(true);
    } else {
      const clonedResponseData = JSON.parse(JSON.stringify(resInfo));
      setClonedResponse(clonedResponseData);
      setIsVegCheck(false);
    }
  }

  if (!clonedResponse) {
    return <ShimmerResInfo />;
  }

  const { info } = clonedResponse?.cards[2]?.card?.card;
  const { cards } =
    clonedResponse?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <div className="res-info-main">
      <h1>{info.name}</h1>
      <p>{info.cuisines.join(", ")}</p>
      <div className="cost_and_rating">
        <p>{info.costForTwoMessage}</p>
        <p className="rating">{info.avgRating} stars</p>
        <div className="veg-only-section">
          <div className="vegonly">Veg Only</div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={vegOnlyChangeHandler}
              checked={isVegCheck}
            />
            <span className="slider round"></span>
          </label>
        </div>
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
