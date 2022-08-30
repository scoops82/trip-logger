import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth0Provider } from "@auth0/auth0-react";

import theme from "./theme";

import PageLayout from "./components/PageLayout";
// import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
// import AddCar from "./pages/AddCar";
// import UpdateCar from "./pages/UpdateCar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// import { CarsProvider } from "./contexts/car.context";

// Auth0 Settings
const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
console.log("🚀 ~ file: App.jsx ~ line 21 ~ AUTH0_DOMAIN", AUTH0_DOMAIN);

const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
console.log("🚀 ~ file: App.jsx ~ line 24 ~ AUTH0_CLIENT_ID", AUTH0_CLIENT_ID);

function App() {
  return (
    <>
      <Router>
        <Auth0Provider
          domain={AUTH0_DOMAIN}
          clientId={AUTH0_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <CssBaseline />
          <ThemeProvider theme={theme}>
            {/* <CarsProvider> */}
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                {/* <Route path="add" element={<AddCar />} />
              <Route path="update/:id" element={<UpdateCar />} /> */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            {/* </CarsProvider> */}
          </ThemeProvider>
        </Auth0Provider>
      </Router>
    </>
  );
}

export default App;
