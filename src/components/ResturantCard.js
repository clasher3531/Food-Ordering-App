import { RES_IMG_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
  const { info } = resData;
  return (
    <div className="res-card">
      <img className="res-img" src={RES_IMG_URL + info.cloudinaryImageId}></img>
      <div className="res-name">{info.name}</div>
      <div className="res-cuisine">{info.cuisines.join(", ")}</div>
      <div className="res-rating">{info.avgRating} Stars</div>
      <div className="res-cost-for-two">{info.costForTwo}</div>
      <div className="res-duration">{info.sla.deliveryTime} mins</div>
    </div>
  );
};

export default ResturantCard;
