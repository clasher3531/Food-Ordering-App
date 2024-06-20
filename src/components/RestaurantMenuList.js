import { MENU_IMG_URL } from "../utils/constants";

const RestaurantMenuList = (props) => {
  return (
    <li className="list">
      <div className="menu-list-main">
        <div className="menu-description-section">
          <h4>{props.list.name}</h4>
          <p>{props.list.price ? "Rs. " + props.list.price / 100 : ""}</p>
          {props.list.ratings.aggregatedRating.rating ? (
            <p className="rating">
              {props.list.ratings.aggregatedRating.rating} Stars
            </p>
          ) : (
            ""
          )}
          <p className="description">{props.list.description}</p>
        </div>
        <div className="menu-image-section">
          <button className="add-button">+ Add</button>
          {props.list.imageId ? (
            <img
              src={MENU_IMG_URL + props.list.imageId}
              width="200px"
              height="200px"
            ></img>
          ) : (
            <div className="image-replica"></div>
          )}
        </div>
      </div>
      <hr></hr>
    </li>
  );
};

export default RestaurantMenuList;
