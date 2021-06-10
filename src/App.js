import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route to="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
