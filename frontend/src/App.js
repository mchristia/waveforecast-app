import {Switch, Route, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchMapPage from "./pages/SearchMapPage";
import SpotDetailsPage from "./pages/SpotDetailsPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from './routing/PrivateRoute'
import FavouritesPage from "./pages/FavouritesPage";
import styled from "styled-components/macro";

function App() {

  return (
      <Wrapper>
      <AuthProvider>
          <Switch>
              <Route path ={"/"} exact>
                  <LoginPage/>
              </Route>
              <PrivateRoute path ={"/home"}>
                  <HomePage />
              </PrivateRoute>
              <PrivateRoute path ={"/search"}>
                  <SearchPage/>
              </PrivateRoute>
              <PrivateRoute path ={"/map"}>
                  <SearchMapPage  />
              </PrivateRoute>
              <PrivateRoute path ={"/user"}>
                  <FavouritesPage />
              </PrivateRoute>
              <PrivateRoute path ={"/:id"}>
                  <SpotDetailsPage />
              </PrivateRoute>
          </Switch>
      </AuthProvider>
      </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  
`
