const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: "1", // 👈 IMPORTANT: use string not object
    });
    console.log("✅ DB CONNECTION SUCCESS");
  } catch (err) {
    console.log("❌ DB CONNECTION FAILED");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
