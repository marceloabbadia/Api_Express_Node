import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.URI;
console.log(URI);

const databaseConnection = async () => {
  try {
    if (!global.mongoose) {
      mongoose.set("strict", false);
      global.mongoose = await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default databaseConnection;
