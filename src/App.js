import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Reading from './components/Reading/Reading';
import Finished from './components/Finished/Finished';
import { PrivateRoute, ProvideAuth } from './utilities/auth';

function App() {

  return (
    <>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Books />
            </Route>
            <PrivateRoute path="/reading-books">
              <Navbar />
              <Reading />
            </PrivateRoute>
            <PrivateRoute path="/finished-books">
              <Navbar />
              <Finished />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </>
  );
}

export default App;
