const express = require("express").Router;
const router = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const path = require("path");

// Home Page

router.get("/", (req, res) => {
  req.method;
  req.originalUrl;
  res.send({
    status: "Succes",
    message: "Welcome to the API",
  });
});

// Route Page

router.get("/page", (req, res) => {
  res.send({
    message: "Halo Ini Halaman Page",
    from: "Yayat",
  });
});

// Dynamic Route

router.get("/page/:id", (req, res) => {
  res.send({
    id: req.params.id,
  });
});

//Dynamic Route 2 Page

router.get("/:makanan/:level/:id", (req, res) => {
  const { makanan, level, id } = req.params;
  res.send({
    makanan: makanan,
    level: level,
    id: id,
  });
});

//form model

router.post("/purchase", upload.single("image"), (req, res, next) => {
  res.status(200);
  const { name, product, price, size, phoneNumber } = req.body;
  const image = req.file;

  if (image) {
    console.log("ada gambar");
    const changeName = path.join(__dirname, "uploads", image.originalname);
    fs.renameSync(image.path, changeName);
  }
  res.json({
    name,
    product,
    price,
    size,
    phoneNumber,
    image,
  });
  res.end;
});

module.exports = router;
