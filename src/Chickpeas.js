import React from "react";
import { NavLink } from 'react-router-dom';

function Chickpeas() {
  return (
    <div className="Chickpeas">
    <div>
      <h1>I never Had a Chickpea</h1>
      <img 
        src="https://i.pinimg.com/originals/51/e9/38/51e938ca4fcf369527755e0b92e51dd0.jpg"
        alt="cheep cheep chickpeas"
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

export default Chickpeas;