import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "null",
        avatar_url: "null",
        bio: "null",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saaddeveloperreact");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <img
          src={avatar_url}
          alt="profile"
          className="w-24 h-24 rounded-full object-cover mb-4 border"
        />

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {/* Bio */}
        <p className="text-sm text-gray-500 mt-1 px-2">
          {bio || "Full Stack Developer"}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600 mt-2">📍 {location || "India"}</p>

        {/* Divider */}
        <div className="w-full border-t my-4"></div>

        {/* Extra Info */}
        <p className="text-xs text-gray-400">GitHub Profile</p>
      </div>
    );
  }
}

export default UserClass;
