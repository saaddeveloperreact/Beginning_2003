import React from "react";
import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [Count] = useState(0);
  const [Count1] = useState(1);
  return (
    <div>
      <h1>Count {Count}</h1>
      <h1>Count1 {Count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <p>Contact: {contact}</p>
    </div>
  );
};

export default User;
