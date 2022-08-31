import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="profile">Profile</Link>
        <Link to="trips">Trips</Link>
      </div>
    </div>
  );
}

export default Home;
