import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {

    const spots = [
        {
        "name" : "Spot1",
        "geograhy" : {
            "longitude" : 1,
            "latidude" : 1,
            "continent" : "Europa",
            "country" : "France",
            "Region" : "Basque",
        },
        "break" : "Beach",
        "level" : "All",


    },
        {
        "name" : "Spot2",
        "geograhy" : {
            "longitude" : 2,
            "latidude" : 1,
            "continent" : "Europa",
            "country" : "France",
            "Region" : "Bretagne",
        },
        "break" : "Beach and Reef",
        "level" : "All",

        }]

  return (
      <Switch>
        <div>
            <Route path = "/home">
                <HomePage/>
            </Route>
            <Route path = "/favourits">
                <FavouriteListPage/>
            </Route>
            <Route path = "/home">
                <SearchPage/>
            </Route>

        </div>
      </Switch>
  );
}

export default App;
