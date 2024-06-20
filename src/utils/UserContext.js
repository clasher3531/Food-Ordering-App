import { createContext } from "react";
const DefaultValue = {
  userLoggedIn: "Default User",
  Age: 27,
  Weight: "62kg",
  Height: "163cm",
};

const UserContext = createContext(DefaultValue);

export default UserContext;
