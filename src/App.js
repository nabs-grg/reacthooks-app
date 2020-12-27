import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { UseStateLogin } from "./UseStateLogin";
import { UseReducerLogin } from "./UseReducerLogin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usestate">UseState Login</Link>
            </li>
            <li>
              <Link to="/usereducer">UseReducer Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/usestate">
            <UseStateLogin />
          </Route>
          <Route path="/usereducer">
            <UseReducerLogin />
          </Route>
          <Route path="/">
            <>
              <h2>Select between different login</h2>
            </>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
