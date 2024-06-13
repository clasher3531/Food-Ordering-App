import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const userInfo = await fetch("https://api.github.com/users/clasher3531");
    const jsonData = await userInfo.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update method called");
  }

  componentWillUnmount() {
    console.log("Component will unmount called");
  }

  render() {
    const { name, location, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar-img" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>
          <a href={html_url}>Github Link</a>
        </h4>
      </div>
    );
  }
}

export default UserClass;
