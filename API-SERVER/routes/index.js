const express = require("express");
const router = express.Router();
const needle = require("needle");

const API_KEY = process.env.API_KEY;

router.get("/subject/:sub/:index", async (req, res) => {
  const apiRes = await needle(
    "get",
    `https://www.googleapis.com/books/v1/volumes?q=subject:${req.params.sub}&key=${API_KEY}&maxResults=12&startIndex=${req.params.index}`
  );
  res.json(apiRes.body);
});

module.exports = router;
