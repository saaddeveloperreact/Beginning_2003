import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
      {/* Error Box */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 max-w-md w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-500 mb-4">OOPS!!</h1>

        {/* Message */}
        <p className="text-gray-600 mb-4">Something went wrong.</p>

        {/* Error Details */}
        <h3 className="text-sm text-gray-500 mb-6">
          {err?.status || "Error"} -{" "}
          {err?.statusText || err?.message || "Unknown error"}
        </h3>

        {/* Back Home Button */}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
