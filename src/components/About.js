import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    console.log("parent render called");
    return (
      <div className="about-container">
        <h1>About Us page</h1>
        <div className="user-container">
          <UserClass
            name={"First"}
            location={"Agra"}
            email={"joshinikhil3531@gmail.com"}
          />
        </div>
        <UserContext.Consumer>
          {(userData) => {
            return (
              <React.Fragment>
                <h1>UserName: {userData.userLoggedIn}</h1>
                <h1>UserAge: {userData.Age}</h1>
                <h1>UserWeight: {userData.Weight}</h1>
                <h1>UserHeight: {userData.Height}</h1>
              </React.Fragment>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
