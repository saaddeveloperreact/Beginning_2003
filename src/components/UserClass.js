import React from "react";

class userClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Rahul",
        location: "Banglore",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saaddeveloperreact");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    //const { name, location, contact } = this.props;
    const { name, location } = this.state.userInfo;
    //const { Count, Count1 } = this.state;
    return (
      <div className="div-class-card">
        {/*<h1>Count{Count}</h1>
        <h1>Count1{Count1}</h1>
        <button
          onClick={() => {
            this.setState({
              Count: this.state.Count + 1,
              Count1: this.state.Count1 + 1,
            });
          }}
        >
          Count Increase
        </button>*/}

        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
      </div>
    );
  }
}
export default userClass;
