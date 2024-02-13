import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-7rhkmwxnin30o55u.us.auth0.com"
    clientId="sC8w1Z20NSSBRxm52Dr8Sim4r3V8I5aj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* <BrowserRouter> */}
    <App name={"React"} />
    {/* </BrowserRouter> */}
  </Auth0Provider>
);
