import React from "react"
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

function VendingMachine(){

  return (
    <div className="VendingMachine">
    <NavLink className="btn btn-light" exact to="/soda">
      Soda
    </NavLink>
    <NavLink  className="btn btn-light" exact to="/bread">
      Bread
    </NavLink>
    <NavLink className="btn btn-light" exact to="/squid">
      Squid
    </NavLink>
    <NavLink className="btn btn-light" exact to="/chickpeas">
      Chickpeas
    </NavLink>
    </div>
  )
}

export default VendingMachine;

//https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest?cb=20120504161315