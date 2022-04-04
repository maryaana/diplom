const mysql = require('mysql2/promise');
require('dotenv').config();
let connection = null;

(async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DBNAME,
    });

    console.log('Connected to db');
  } catch (error) {
    console.log('Error:', error);
  }
})();

let database = {
  getReviews: async () => {
    let reviews = null;
    try {
      reviews = await connection.execute('select * from reviews;', []);
    } catch (e) {
      console.log(e);
    }

    if (reviews != null) {
      return reviews[0];
    }

    return null;
  },

  getBids: async () => {
    let bids = null;
    try {
      bids = await connection.execute(
        'select bids.*, casesTags.tag from bids left join casesTags on casesTags_id = casesTags.id;',
        []
      );
    } catch (e) {
      console.log(e);
    }

    if (bids != null) {
      return bids[0];
    }

    return null;
  },

  getNews: async () => {
    let news = null;
    try {
      news = await connection.execute(
        'select news.*, newsTags.tag from news left join newsTags on newsTags_id = newsTags.id;',
        []
      );
    } catch (e) {
      console.log(e);
    }

    if (news != null) {
      return news[0];
    }

    return null;
  },

  getNewsTags: async () => {
    let newsTags = null;
    try {
      newsTags = await connection.execute('select * from newsTags;', []);
    } catch (e) {
      console.log(e);
    }

    if (newsTags != null) {
      return newsTags[0];
    }

    return null;
  },

  getCasesTags: async () => {
    let casesTags = null;
    try {
      casesTags = await connection.execute('select * from casesTags;', []);
    } catch (e) {
      console.log(e);
    }

    if (casesTags != null) {
      return casesTags[0];
    }

    return null;
  },

  getCases: async () => {
    let cases = null;
    try {
      cases = await connection.execute('select * from cases;', []);
    } catch (e) {
      console.log(e);
    }

    if (cases == null) return null;

    cases = cases[0];
    let data = [];

    for (let c of cases) {
      let tags = null;
      try {
        tags = await connection.execute(
          `select casesTags.id, casesTags.tag from cases 
            inner join casesToCasesTags 
              on cases.id = casesToCasesTags.cases_id 
              and cases.id = ?
            inner join casesTags on casesToCasesTags.casesTags_id = casesTags.id;
          `,
          [c.id]
        );
      } catch (e) {
        console.log(e);
      }

      if (tags == null) return null;

      data.push({
        ...c,
        tags: tags[0],
      });
    }
    return data;
  },

  deleteCase: async (id) => {
    await connection.execute('delete from casestocasestags where cases_id=?;', [id]);
    return await connection.execute('delete from cases where id=?;', [id]);
  },

  deleteNews: async (id) => {
    return await connection.execute('delete from news where id=?;', [id]);
  },

  deleteBid: async (id) => {
    return await connection.execute('delete from bids where id=?;', [id]);
  },
};

module.exports = database;
