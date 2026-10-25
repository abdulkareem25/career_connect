import app from "./src/app.js";
import config from "./src/configs/config.js";
import connectDB from "./src/configs/db.js";

connectDB();

app.listen(config.PORT, () => {
  console.log("Server is running on port:",  config.PORT);
});