import React from "react"
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

function VendingMachine(){
  return (
    <div className="VendingMachine">
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/bread">
        Bread
      </NavLink>
      <NavLink exact to="/squid">
        Squid
      </NavLink>
      <NavLink exact to="/chickpeas">
        Chickpeas
      </NavLink>
    </div>
  )
}

export default VendingMachine