const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

// middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send(" Personal Expense Tracker Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
