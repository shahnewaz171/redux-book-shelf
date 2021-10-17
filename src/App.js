import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Reading from './components/Reading/Reading';
import Finished from './components/Finished/Finished';
import { PrivateRoute, ProvideAuth } from './utilities/auth';
import './App.css';

function App() {

  return (
    <>
      <ProvideAuth>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <PrivateRoute path="/reading-books">
              <Reading />
            </PrivateRoute>
            <PrivateRoute path="/finished-books">
              <Finished />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </>
  );
}

export default App;
