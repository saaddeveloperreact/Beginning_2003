import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is about us page</h2>
      <div className="user-card">
        <User
          name="John Doe"
          location="New York"
          contact="john.doe@example.com"
        />
        <UserClass name="Saad" location="Mysore" contact="saad@example.com" />
      </div>
    </div>
  );
};
export default About;
