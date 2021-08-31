import React from "react";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home path="/" exact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
