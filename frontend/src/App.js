import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {

    const spots = [
        {
            "id" : "abd",
            "name" : "Spot1",
            "geography" : {
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
            "id" : "def",
            "name" : "Spot2",
            "geography" : {
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
            <Route path = "/" exact>
                <HomePage/>
            </Route>
            <Route path = "/favourites">
                <FavouriteListPage/>
            </Route>
            <Route path = "/search">
                <SearchPage spots={spots}/>
            </Route>

        </div>
      </Switch>
  );
}

export default App;
