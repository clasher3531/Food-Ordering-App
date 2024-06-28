import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantInfo from "./components/RestaurantInfo";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { useEffect, useState, useContext } from "react";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/store/store";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const userData = useContext(UserContext);
  const [userName, setUserName] = useState(userData.userLoggedIn);
  useEffect(() => {
    setUserName("Nikhil Joshi");
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          ...userData,
          userLoggedIn: userName,
          setUserName: setUserName,
        }}
      >
        <div className="main">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={reactRouter} />);
