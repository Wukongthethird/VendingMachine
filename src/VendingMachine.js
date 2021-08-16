import React from "react"
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

function VendingMachine(){

  return (
    <div className="VendingMachine">
      <div className="btn btn-light">
        <NavLink exact to="/soda">
          Soda
        </NavLink>
      </div>
      <div className="btn btn-light">
        <NavLink exact to="/bread">
          Bread
        </NavLink>
      </div>
      <div className="btn btn-light">
        <NavLink exact to="/squid">
          Squid
        </NavLink>
      </div>
      <div className="btn btn-light">
        <NavLink exact to="/chickpeas">
          Chickpeas
        </NavLink>
      </div>
    </div>
  )
}

export default VendingMachine;

//https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest?cb=20120504161315