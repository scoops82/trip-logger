import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth0Provider } from "@auth0/auth0-react";

import theme from "./theme";

import PageLayout from "./components/PageLayout";
import ProtectedRoute from "./components/ProtectedRoute";
// import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
// import AddCar from "./pages/AddCar";
// import UpdateCar from "./pages/UpdateCar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Trips from "./pages/Trips";
import AddTrip from "./pages/AddTrips";

// Contexts
import { AuthProvider } from "./contexts/auth.context";
import { PlacesProvider } from "./contexts/places.context";
import { UsersProvider } from "./contexts/users.context";
import { TripsProvider } from "./contexts/trips.context";

// Auth0 Settings
import history from "./utils/history";
import { getConfig } from "./config";
import { UIProvider } from "./contexts/ui.context";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

function App() {
  return (
    <>
      <Router>
        <Auth0Provider {...providerConfig}>
          <UIProvider>
            <AuthProvider>
              <PlacesProvider>
                <UsersProvider>
                  <TripsProvider>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                      {/* <CarsProvider> */}
                      <Routes>
                        <Route path="/" element={<PageLayout />}>
                          <Route index element={<Home />} />
                          <Route
                            path="profile"
                            element={
                              <ProtectedRoute>
                                <Profile />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/trips"
                            element={
                              <ProtectedRoute>
                                <Trips />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/trips/add"
                            element={
                              <ProtectedRoute>
                                <AddTrip />
                              </ProtectedRoute>
                            }
                          />
                          {/* <Route path="add" element={<AddCar />} />
              <Route path="update/:id" element={<UpdateCar />} /> */}
                          <Route path="*" element={<NotFound />} />
                        </Route>
                      </Routes>
                      {/* </CarsProvider> */}
                    </ThemeProvider>
                  </TripsProvider>
                </UsersProvider>
              </PlacesProvider>
            </AuthProvider>
          </UIProvider>
        </Auth0Provider>
      </Router>
    </>
  );
}

export default App;
