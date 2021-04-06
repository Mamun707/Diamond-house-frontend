import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import NewCustomer from "./Pages/NewCustomer";
import Transaction from "./Pages/Transaction";
import Users from "./Pages/Users";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/newcustomer" component={NewCustomer} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
