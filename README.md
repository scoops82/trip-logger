# Trip Logger

## Aims

- To allow a person to log their trips to different countries (MVP)
- To allow them to see which countries they have left to visit \*

          server          client

  DEV: nodemon vite-dev-server
  PROD node _static file served_

## Data Shapes

### Entities

- Places (countries)
- Users (Auth0 - sub(id)) - store extra info
- Trips [user, place, date]

### Views

- Profile (see your own trips)
- Unvisited countries
- Leaderboard - who has visited the most countries
