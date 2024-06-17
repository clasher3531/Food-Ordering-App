import { useState, useEffect } from "react";
import { RES_INFO_URL } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [clonedResponse, setClonedResponse] = useState(null);
  const [isVegCheck, setIsVegCheck] = useState(false);
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

  const vegOnlyChangeHandler = (event) => {
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
  };

  return [clonedResponse, isVegCheck, vegOnlyChangeHandler];
};

export default useRestaurantInfo;
