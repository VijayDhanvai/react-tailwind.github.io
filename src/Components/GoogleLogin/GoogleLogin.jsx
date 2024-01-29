import React from "react";
import GoogleLogin from "react-google-login";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="803524623588-k9jv31vihdgjhsvrqkhu4bjru2jrljjo.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
};

export default GoogleLoginButton;
