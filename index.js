require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const connectDB = require("./src/configs/db");

connectDB()
  .then(() => {
  	console.log("DB connected!");
  	app.listen(PORT, () => console.log("Server running on port...",PORT));
  })
  .catch((error) => console.error(error))
