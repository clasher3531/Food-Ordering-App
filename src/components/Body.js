import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
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
      <div className="res-list">
        {resList.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
