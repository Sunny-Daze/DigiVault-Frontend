const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    a: "hello",
    name: "sunny",
    number: 3534,
  };
  res.json(obj);
});

module.exports = router;
