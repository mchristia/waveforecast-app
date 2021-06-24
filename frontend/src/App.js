import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchMapPage from "./pages/SearchMapPage";
import SpotDetailsPage from "./pages/SpotDetailsPage";
import useSurfSpot from "./hooks/useSrufSpots";


function App() {
    const {surfSpots} = useSurfSpot();
  return (
          <Switch>
              <Route path = "/" exact>
                  <HomePage />
              </Route>
              <Route path = "/search">
                  <SearchPage surfSpots={surfSpots}/>
              </Route>
              <Route path = "/map">
                  <SearchMapPage surfSpots={surfSpots} />
              </Route>
              <Route path = "/:id">
                  <SpotDetailsPage />
              </Route>
          </Switch>
  );
}

export default App;
