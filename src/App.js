import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import Reading from './components/Reading/Reading';
import Finished from './components/Finished/Finished';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Books />
          </Route>
          <Route path="/reading-books">
            <Navbar />
            <Reading />
          </Route>
          <Route path="/finished-books">
            <Navbar />
            <Finished />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
