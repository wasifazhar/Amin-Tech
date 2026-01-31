const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ SERVE FRONTEND FILES
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ SERVE UPLOADS
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// ROUTES
app.use("/contact", require("./routes/contact"));
app.use("/apply", require("./routes/apply"));
app.use("/admin", require("./routes/admin"));

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
