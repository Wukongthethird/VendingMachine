import React from "react";
import { NavLink } from 'react-router-dom';

function Soda() {
  return (
    <div className="Soda">
      <div>
        <h1>FZZZZZZZZZZZZZZ</h1>
      <img 
        src="https://p.favim.com/orig/2018/09/11/cartoon-soda-vending-machine-Favim.com-6279046.gif"
        alt="vending machine soda"
      />
    </div>
    <div className="btn btn-light">
        <NavLink exact to="/">
          Go Back
      </NavLink>
    </div>
    </div>
  );
}

export default Soda;