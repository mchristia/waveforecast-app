import {Switch, Route, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchMapPage from "./pages/SearchMapPage";
import SpotDetailsPage from "./pages/SpotDetailsPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from './routing/PrivateRoute'
import FavouritesPage from "./pages/FavouritesPage";

function App() {

  return (
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
              <Route path ={"/user"}>
                  <FavouritesPage />
              </Route>
              <PrivateRoute path ={"/:id"}>
                  <SpotDetailsPage />
              </PrivateRoute>

          </Switch>
      </AuthProvider>
  );
}

export default App;
