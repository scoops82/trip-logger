import mongoose from "mongoose";

const localDBName = "trip-logger";
const { MONGODB_URI = `mongodb://127.0.0.1/${localDBName}` } = process.env;

console.log(`MONGODB_URI ${MONGODB_URI}`);

const options = {};

try {
  await mongoose.connect(MONGODB_URI, options);
} catch (error) {
  handleError(error);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});
