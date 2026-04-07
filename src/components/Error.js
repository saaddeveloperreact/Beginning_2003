import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>OOPS!!</h1>
      <p>Something went wrong.</p>
      <h3>
        {err?.status || "Error"} -{" "}
        {err?.statusText || err?.message || "Unknown error"}
      </h3>
    </div>
  );
};

export default Error;
