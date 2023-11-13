const express = require("express");
const app = express();
const port = 3000;
const router = require("./route");
const time = require("./middleware/timeStamp");
const path = require("path");

app.use(time);
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Route yang dituju : " + req.originalUrl + " tidak tersedia",
  });
});
app.listen(port, () => console.log(`server use ${port}`));
