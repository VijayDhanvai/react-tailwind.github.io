import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

  return (
    <>
      <span className="mx-2 d-d-inline-block ">
        <div className="dropdown inline-block relative">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1 capitalize">Hi {user.name}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 right-0 pt-1">
            <li className="">
              <Link
                to="/profile"
                className="bg-gray-200 cursor-pointer hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              >
                User Profile
              </Link>
            </li>

            <li className="">
              <span
                className="bg-gray-200 cursor-pointer hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </span>
            </li>
          </ul>
        </div>
      </span>
    </>
  );
};

export default LogoutButton;
