// const express = require("express");
// const app = express();
// const port = 3000;
// const router = require("./route");

// app.use(router);
// app.use((req, res, next) => {
//   res.status(404);
//   res.send({
//     status: "failed",
//     message: "Route yang dituju : " + req.originalUrl + " tidak tersedia",
//   });
// });
// app.listen(port, () => console.log(`server use ${port}`));

// const express = require("express").Router;
// const router = express();
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// const fs = require("fs");
// const path = require("path");

// // Home Page

// router.get("/", (req, res) => {
//   res.send({
//     status: "Succes",
//     message: "Welcome to the API",
//   });
// });

// module.exports = router;
