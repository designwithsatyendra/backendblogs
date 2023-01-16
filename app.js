const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
//user router
app.use(require("./router/userComment"));
app.use(require("./router/userAuth"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
