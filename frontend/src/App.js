import {Switch, Route, useHistory} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchMapPage from "./pages/SearchMapPage";
import SpotDetailsPage from "./pages/SpotDetailsPage";
import useSurfSpot from "./hooks/useSurfSpots";
import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import axios from "axios";


function App() {
    const [token, setToken] = useState();
    const history = useHistory()
    const {surfSpots} = useSurfSpot(token);


    const login =(credentials)=>{
        axios.post("/auth/login", credentials)
            .then(res => res.data)
            .then(setToken)
            .then(() => history.push("/home"))
            .catch(error => console.error(error.message))
    }

  return (
          <Switch>
              <Route path = "/" exact>
                  <LoginPage login={login}/>
              </Route>
              <Route path = "/home">
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
