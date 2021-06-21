import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {

  return (
      <Switch>
            <Route path = "/" exact>
                <HomePage/>
            </Route>
            <Route path = "/search">
                <SearchPage/>
            </Route>
      </Switch>
  );
}

export default App;
