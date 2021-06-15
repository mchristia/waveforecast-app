import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
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
