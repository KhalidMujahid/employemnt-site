const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function connectDB() {
  return await mongoose
    .connect(
      process.env.NODE_ENV === "development"
        ? process.env.MONGO_DB
        : process.env.MONGO_GLOBAL
    );
}

module.exports = connectDB;