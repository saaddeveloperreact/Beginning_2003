import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-3">
          We are building a modern food ordering platform using React, focused
          on performance, scalability, and great user experience.
        </p>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">What We Do</h2>
        <p className="text-gray-600 leading-relaxed">
          This project showcases how to build a dynamic food delivery UI using
          real-time APIs. It includes features like restaurant listing,
          filtering, search, and responsive design using Tailwind CSS.
        </p>
      </div>

      {/* User Card Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Developer
        </h2>

        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 w-80 hover:shadow-md transition duration-200">
            {/* You can switch between User and UserClass */}
            <UserClass
              name="Saad"
              location="Mysore"
              contact="saad@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
