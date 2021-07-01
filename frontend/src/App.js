import {Switch, Route, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchMapPage from "./pages/SearchMapPage";
import SpotDetailsPage from "./pages/SpotDetailsPage";
import useSurfSpot from "./hooks/useSurfSpots";
import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import axios from "axios";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from './routing/PrivateRoute'

function App() {

  return (
      <AuthProvider>
          <Switch>
              <Route path = "/" exact>
                  <LoginPage/>
              </Route>
              <Route path = "/home">
                  <HomePage />
              </Route>
              <PrivateRoute path ={"/search"}>
                  <SearchPage/>
              </PrivateRoute>
              <PrivateRoute path ={"/map"}>
                  <SearchMapPage  />
              </PrivateRoute>
              <PrivateRoute path ={"/:id"}>
                  <SpotDetailsPage />
              </PrivateRoute>
          </Switch>
      </AuthProvider>
  );
}

export default App;
