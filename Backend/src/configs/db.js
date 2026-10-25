import { connect } from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    const { connection } = await connect(config.MONGODB_URI);
    console.log("Database Connected:", connection.host, connection.name)
  } catch (error) {
    console.log("Database Connection Error:", error.message)
  }
};

export default connectDB;