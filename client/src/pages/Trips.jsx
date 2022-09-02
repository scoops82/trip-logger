import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./../contexts/auth.context.jsx";
import { TripsContext } from "./../contexts/trips.context.jsx";

function Trips() {
  const { accessToken } = useContext(AuthContext);
  const { fetchTrips, trips, loaded, loading, deleteTrip } =
    useContext(TripsContext);

  useEffect(() => {
    console.log("HERRERERERE", { trips, loaded, loading });
    if (!loaded && !loading) {
      console.log("fetching");
      fetchTrips();
    }
  });
  console.log(trips);
  return (
    <div>
      <h1>Trips</h1>
      <p>{accessToken}</p>

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
