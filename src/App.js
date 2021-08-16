import React from "react"

import Soda from "./Soda";
import Bread from "./Bread";
import Squid from "./Squid";
import Chickpeas from "./Chickpeas";
import VendingMachine from "./VendingMachine"

import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/bread">
          <Bread />
        </Route>
        <Route exact path="/squid">
          <Squid />
        </Route>
        <Route exact path="/chickpeas">
          <Chickpeas />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
