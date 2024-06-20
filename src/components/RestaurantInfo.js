import { useParams } from "react-router-dom";
import Accordian from "./Accordian";
import ShimmerResInfo from "./ShimmerResInfo";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useState } from "react";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [indexActive, setIndexActive] = useState(2);

  const [clonedResponse, isVegCheck, vegOnlyChangeHandler] =
    useRestaurantInfo(resId);

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
            <Accordian
              key={menuCard.card.card.title}
              menuCard={menuCard}
              menus={menus}
              showList={index == indexActive ? true : false}
              setIndexActive={(val) => setIndexActive(val ? val : index)}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantInfo;
