import RestaurantMenuList from "./RestaurantMenuList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const emptyCartClickHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-main">
      <h1>Cart ({cartItems.length} Items)</h1>
      <button className="empty-cart" onClick={emptyCartClickHandler}>
        Empty Cart
      </button>
      {cartItems.length > 0 ? (
        cartItems.map((menu) => (
          <RestaurantMenuList key={menu.id} list={menu} isCartPage={true} />
        ))
      ) : (
        <h1>Cart is empty, please add item to the cart</h1>
      )}
    </div>
  );
};

export default Cart;
