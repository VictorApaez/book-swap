const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

export const app = express();

app.use(cors());
app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
