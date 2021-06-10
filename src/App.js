import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route to="/">
            <Navbar />
            <Books />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
