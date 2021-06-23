import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchMapPage from "./pages/SearchMapPage";
import SpotDetailsPage from "./pages/SpotDetailsPage";

function App() {

  return (
      <Switch>
            <Route path = "/" exact>
                <HomePage />
            </Route>
            <Route path = "/search">
                <SearchPage  />
            </Route>
            <Route path = "/map">
                <SearchMapPage />
            </Route>
            <Route path = "/:id">
                <SpotDetailsPage />
            </Route>

      </Switch>
  );
}

export default App;
