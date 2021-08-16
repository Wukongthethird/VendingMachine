import React from "react";
import { NavLink } from 'react-router-dom';

function Squid() {
  return (
    <div className="Squid">
    <div>
      <h1>IKA IKA IKA</h1>
      <img 
        src="https://i.pinimg.com/originals/8f/81/80/8f81809905440907069278bc045c525a.gif"
        alt="dried blooper"
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

export default Squid;