import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home2 from './components/Home2/Home2';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">Home2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home2 />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
