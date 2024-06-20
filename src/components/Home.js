import ResturantCard, { withPureVeg } from "./ResturantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

const Home = () => {
  const [listOfResturant, InitialListOfResturants, setListOfResturant] =
    useRestaurantList();

  const onlineStatus = useOnlineStatus();
  const RestaurantCardWithVeg = withPureVeg(ResturantCard);
  if (!onlineStatus) {
    return <OfflinePage />;
  }
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
            <Link
              key={resturant.info.id}
              to={"restaurant/" + resturant.info.id}
            >
              {resturant.info.veg ? (
                <RestaurantCardWithVeg resData={resturant} />
              ) : (
                <ResturantCard resData={resturant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
