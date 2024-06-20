import RestaurantMenuList from "./RestaurantMenuList";
import React from "react";
const Accordian = (props) => {
  const menuTitleHandler = () => {
    if (props.showList) {
      props.setIndexActive(-1);
    } else {
      props.setIndexActive();
    }
  };
  return (
    <React.Fragment>
      <div className="menu-title" onClick={menuTitleHandler}>
        {props.menuCard.card.card.title}({props.menus.length})
        <span className="arrow">
          {props.showList ? <span>&#11165;</span> : <span>&#11167;</span>}
        </span>
      </div>
      <br></br>
      {props.showList ? (
        <ul className="menu-list">
          {props.menus.map((menu) => (
            <RestaurantMenuList key={menu.card.info.id} list={menu.card.info} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Accordian;
