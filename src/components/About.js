import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("Parent component did mount called");
  }

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
      </div>
    );
  }
}

export default About;
