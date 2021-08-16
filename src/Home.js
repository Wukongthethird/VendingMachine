import React from "react";
import VendingMachine from "./VendingMachine"

function Home() {
  return (
    <div className = "Home">
      <h1>Deposit your Monies</h1>
      <VendingMachine />
    </div>
  );
}

export default Home;