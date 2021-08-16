import React from "react"
import { NavLink } from 'react-router-dom';

function VendingMachine(){
  let style = {
    backgroundImage: "url('https://images.unsplash.com/photo-1618506557292-ec1862b3c506?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVuZGluZyUyMG1hY2hpbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')",
    backgroundSize: "100%",
  }
  return (
    <div className="VendingMachine" style={style}>
      <div>
        <NavLink exact to="/soda">
          Soda
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/bread">
          Bread
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/squid">
          Squid
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/chickpeas">
          Chickpeas
        </NavLink>
      </div>
    </div>
  )
}

export default VendingMachine;

//https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest?cb=20120504161315