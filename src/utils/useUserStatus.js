import { useState, useEffect } from "react";

const useUserStatus = () => {
  const [userStatus, setuserStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setuserStatus(false);
    });
    window.addEventListener("online", () => {
      setuserStatus(true);
    });
  }, []);

  return userStatus;
};
export default useUserStatus;
