import React from "react";
import "./App.css";
import moment from "moment";
import { Route, Switch, Link } from "react-router-dom";
import Category from "./components/Categories/Categories";
import JokeDipslay from "./components/JokeDisplay/JokeDisplay";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Random Joke</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/category",
                }}
              >
                Categories
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <Switch>
          <Route path="/category" exact component={Category} />
          <Route exact path="/" component={JokeDipslay} />
        </Switch>
      </div>
      <footer>{moment(new Date()).format("MMM, DD YYYY")}</footer>
    </>
  );
}
export default App;
