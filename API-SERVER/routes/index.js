const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_KEY = process.env.API_KEY;

router.get("/subject/:sub", async (req, res) => {
  const apiRes = await needle(
    "get",
    `https://www.googleapis.com/books/v1/volumes?q=subject:${req.params.sub}&key=${API_KEY}`
  );

  res.json(apiRes.body);
});

module.exports = router;
