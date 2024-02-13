import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    document.title = `Profile ${user.name}`;
  }, []);
  return (
    <>
      <div className="bg-gray-100 p-8 mt-5 rounded-md ">
        <div className="text-center max-w-lg mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <div className="p-6 ">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 capitalize">{user.name} </h2>
            <h3 className="text-sm font-medium mb-2 capitalize">
              {user.nickname}
            </h3>
            <a href="mailto:{user.email}" className="text-gray-600">
              {user.email}
            </a>
          </div>
          <div className="border-t p-6">
            <p className="text-gray-700">
              Email Verified : {user.email_verified ? "Yes" : " No"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
