import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Layout from "./pages/layout";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.REACT_APP_AUTH0_IDENTIFIER,
        scope: "openid profile email"
      }}
    >
      <Layout values={{
        user,
        isAuthenticated,
        isLoading,
      }} />
    </Auth0Provider>
  );
}

export default App;
