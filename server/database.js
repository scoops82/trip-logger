import mongoose from "mongoose";

const options = {};

try {
  await mongoose.connect(uri, options);
} catch (error) {
  handleError(error);
}

mongoose.connection.on("error", (err) => {
  console.log(err);
});
