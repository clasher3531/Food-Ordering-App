import { RES_IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const ResturantCard = ({ resData }) => {
  const { info } = resData;
  const userData = useContext(UserContext);
  return (
    <div className="res-card">
      <img className="res-img" src={RES_IMG_URL + info.cloudinaryImageId}></img>
      <div className="res-name">{info.name}</div>
      <div className="res-cuisine">{info.cuisines.join(", ")}</div>
      <div className="res-rating">{info.avgRating} Stars</div>
      <div className="res-cost-for-two">{info.costForTwo}</div>
      <div className="res-duration">{info.sla.deliveryTime} mins</div>
      <div className="user-details">UserName: {userData.userLoggedIn}</div>
      <div className="user-details">UserAge: {userData.Age}</div>
      <div className="user-details">UserWeight: {userData.Weight}</div>
      <div className="user-details">UserHeight: {userData.Height}</div>
    </div>
  );
};

export const withPureVeg = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="veg_label">Pure Veg</label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
