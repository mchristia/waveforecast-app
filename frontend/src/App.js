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
                "latitude" : 1,
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
                "latitude" : 1,
                "continent" : "Europa",
                "country" : "France",
                "Region" : "Bretagne",
            },
            "break" : "Beach and Reef",
            "level" : "All",

        }
        ,
        {
            "id" : "ghi",
            "name" : "Spot3",
            "geography" : {
                "longitude" : 3,
                "latitude" : 3,
                "continent" : "Europa",
                "country" : "Protugal",
                "Region" : "Algarve",
            },
            "break" : "Beach and Reef",
            "level" : "All",

        }
        ,
        {
            "id" : "jkl",
            "name" : "Spot4",
            "geography" : {
                "longitude" : 2,
                "latitude" : 2,
                "continent" : "Europa",
                "country" : "Spain",
                "Region" : "Andalusia",
            },
            "break" : "Beach and Reef",
            "level" : "All",

        }]

  return (
      <Switch>
            <Route path = "/" exact>
                <HomePage/>
            </Route>
            <Route path = "/search">
                <SearchPage spots={spots}/>
            </Route>
      </Switch>
  );
}

export default App;
