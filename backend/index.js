const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

// CORS Middleware
app.use(
  cors({
    origin: "*",
  })
);

// JSON body parser
app.use(express.json());

// Mount routes
app.use("/api/v1", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

// ✅ FIRST connect to DB, THEN start server
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
  });
});
