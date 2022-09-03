import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "./../contexts/auth.context.jsx";
import { TripsContext } from "./../contexts/trips.context.jsx";

function Trips() {
  const { accessToken } = useContext(AuthContext);
  const { fetchTrips, trips, loaded, loading, deleteTrip } =
    useContext(TripsContext);

  useEffect(() => {
    if (!loaded && !loading) {
      console.log("fetching");
      fetchTrips();
    }
  });
  console.log(trips);
  return (
    <div>
      <h1>Trips</h1>
      <Button
        sx={{ my: 2, color: "white", display: "block" }}
        component={Link}
        to="/trips/add"
      >
        Add a Trip!
      </Button>

      {trips?.length === 0 && <p>No trips listed</p>}
      <ul>
        {trips.map(({ date, place, _id }) => (
          <li key={_id}>
            {place.name.common} (Date: {date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trips;
