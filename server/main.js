const express = require('express');
const app = express();
const port = 3001;
const db = require('./db.js');

app.get('/getReviews', async (req, res) => {
  let reviews = null;
  try {
    reviews = await db.getReviews();
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }

  if (reviews == null) res.json({ success: false });

  setTimeout(() => {
    res.json({ success: true, data: reviews });
  }, 1000);
});

app.get('/getBids', async (req, res) => {
  let bids = null;
  try {
    bids = await db.getBids();
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }

  if (bids == null) res.json({ success: false });

  res.json({ success: true, data: bids });
});

app.get('/getNews', async (req, res) => {
  let news = null;
  try {
    news = await db.getNews();
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }

  if (news == null) res.json({ success: false });

  res.json({ success: true, data: news });
});

app.get('/getCasesTags', async (req, res) => {
  let casesTags = null;
  try {
    casesTags = await db.getCasesTags();
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }

  if (casesTags == null) res.json({ success: false });

  res.json({ success: true, data: casesTags });
});

app.get('/getCases', async (req, res) => {
  let cases = null;
  try {
    cases = await db.getCases();
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }

  if (cases == null) res.json({ success: false });

  res.json({ success: true, data: cases });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
