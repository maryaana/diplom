const express = require('express');
const app = express();
const port = 3001;
const db = require('./db.js');
const fs = require('fs');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

const publicPath = './../public';
const casesPath = 'projects';
const newsPath = 'news';

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

app.get('/getNewsTags', async (req, res) => {
  let newsTags = null;
  try {
    newsTags = await db.getNewsTags();
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }

  if (newsTags == null) res.json({ success: false });

  res.json({ success: true, data: newsTags });
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

app.post('/authAdmin', async (req, res) => {
  if (req.body.login !== '1' || req.body.password !== '1') {
    res.json({ success: false });
    return;
  }

  res.json({ success: true, data: true });
});

app.post('/casesDelete', async (req, res) => {
  try {
    let result = await db.deleteCase(req.body.id);
    fs.unlink(`${publicPath}/${casesPath}/${req.body.id}.png`, function (err) {
      if (err) return console.log(err);
    });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }

  res.json({ success: true });
});

app.post('/casesCreate', async (req, res) => {
  try {
    let result = await db.createCase(req.body);

    let base64 = req.body.file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var buffer = new Buffer.from(base64[2], 'base64');
    fs.writeFile(`${publicPath}/${casesPath}/${result}.png`, buffer, 'base64', function (err) {
      console.log(err);
    });

    res.json({ success: true, id: result });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }
});

app.post('/casesEdit', async (req, res) => {
  try {
    let [name, oldName] = await db.editCase(req.body);

    let base64 = req.body.file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var buffer = new Buffer.from(base64[2], 'base64');

    // fs.unlink(`${publicPath}/${casesPath}/${oldName}`, function (err) {
    //   console.log(err);
    // });

    fs.writeFile(`${publicPath}/${casesPath}/${name}`, buffer, 'base64', function (err) {
      console.log(err);
    });

    res.json({ success: true, id: req.body.id, name });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }
});

app.post('/newsDelete', async (req, res) => {
  try {
    let result = await db.deleteNews(req.body.id);
    fs.unlink(`${publicPath}/${newsPath}/${req.body.id}.png`, function (err) {
      if (err) return console.log(err);
    });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }

  res.json({ success: true });
});

app.post('/newsCreate', async (req, res) => {
  try {
    let result = await db.createNews(req.body);

    let base64 = req.body.file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var buffer = new Buffer.from(base64[2], 'base64');
    fs.writeFile(`${publicPath}/${newsPath}/${result}.png`, buffer, 'base64', function (err) {
      console.log(err);
    });

    res.json({ success: true, id: result });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }
});

app.post('/newsEdit', async (req, res) => {
  console.log(req.body);
  try {
    let [name, oldName] = await db.editNews(req.body);

    let base64 = req.body.file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var buffer = new Buffer.from(base64[2], 'base64');

    // fs.unlink(`${publicPath}/${casesPath}/${oldName}`, function (err) {
    //   console.log(err);
    // });

    fs.writeFile(`${publicPath}/${newsPath}/${name}`, buffer, 'base64', function (err) {
      console.log(err);
    });

    res.json({ success: true, id: req.body.id, name });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }
});

app.post('/bidsDelete', async (req, res) => {
  try {
    let result = await db.deleteBid(req.body.id);
  } catch (e) {
    console.log(e);
    res.json({ success: false });
    return;
  }

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
