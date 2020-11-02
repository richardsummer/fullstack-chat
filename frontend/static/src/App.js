import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <div className="App">
          <div className="container mt-5">
            <div className="row">
              <form className="col">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <input type="text" className="form-control" id="message"/>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>

              <ul className="col"></ul>
            </div>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Register() {
  return <h2>Register</h2>;
}

// export default App;
