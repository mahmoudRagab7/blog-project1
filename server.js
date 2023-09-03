const express = require("express");
const app = express();
const routes = require("./routes");

app.use("/api", routes);

const port = process.env.PORT || 5000;

require("./dp/mongoose");

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
