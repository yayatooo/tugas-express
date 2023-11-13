const time = (req, res, next) => {
  console.log(
    "Tes eheh",
    new Date().toLocaleDateString(),
    req.originalUrl,
    req.method
  );
  next();
};

module.exports = time;
