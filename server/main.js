const express = require('express');
const app = express();
const port = 3001;
const db = require('./db.js');

app.get('/getReviews', async (req, res) => {
  let reviews = await db.checkTable();

  if (reviews == null) res.json({success: false});

  res.json({success: true, data: reviews});
})

app.get('/getReviews', async (req, res) => {
  let reviews = await db.checkTable();

  if (reviews == null) res.json({success: false});

  res.json({success: true, data: reviews});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})