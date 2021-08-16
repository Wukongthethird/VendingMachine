import React from "react";
import { NavLink } from 'react-router-dom';

function Bread() {
  return (
    <div className="Bread">
    <div>
      <h1>Pa Pa Pan Da</h1>
      <img 
        src="https://soranews24.com/wp-content/uploads/sites/3/2016/10/panda-bread-top.png"
        alt="panda pan"
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

export default Bread;