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

  createCase: async (body) => {
    const result = await connection.execute(
      'insert into cases(name, description, avatar, link) values(?, ?, "#", ?);',
      [body.name, body.description, body.moreInfo]
    );

    body.categories.split(',').forEach(async (element) => {
      await connection.execute(
        'insert into casestocasestags(cases_id, casesTags_id) values(?, ?);',
        [result[0].insertId, element]
      );
    });

    await connection.execute('update cases set avatar=? where id=?;', [
      `${result[0].insertId}.png`,
      result[0].insertId,
    ]);

    return result[0].insertId;
  },

  editCase: async (body) => {
    const result = await connection.execute(
      'update cases set name=?, description=?, link=? where id=?;',
      [body.name, body.description, body.moreInfo ?? body.link, body.id]
    );

    await connection.execute('delete from casestocasestags where cases_id=?;', [body.id]);

    body.categories.split(',').forEach(async (element) => {
      await connection.execute(
        'insert into casestocasestags(cases_id, casesTags_id) values(?, ?);',
        [body.id, element]
      );
    });

    const nameTime = new Date().getTime();
    const name = `${body.id}-edited-${nameTime}.png`;

    const oldName = await connection.execute('select avatar from cases where id=?;', [body.id]);

    await connection.execute('update cases set avatar=? where id=?;', [name, body.id]);

    return [name, oldName[0][0].avatar];
  },

  createNews: async (body) => {
    const result = await connection.execute(
      'insert into news(name, description, avatar, creation_date, newsTags_id) values(?, ?, "#", ?, ?);',
      [body.name, body.description, body.moreInfo, body.categories]
    );

    await connection.execute('update news set avatar=? where id=?;', [
      `${result[0].insertId}.png`,
      result[0].insertId,
    ]);

    return result[0].insertId;
  },

  editNews: async (body) => {
    const result = await connection.execute(
      'update news set name=?, description=?, creation_date=?, newsTags_id=? where id=?;',
      [body.name, body.description, body.moreInfo ?? body.creation_date, body.categories, body.id]
    );

    const nameTime = new Date().getTime();
    const name = `${body.id}-edited-${nameTime}.png`;

    const oldName = await connection.execute('select avatar from news where id=?;', [body.id]);

    await connection.execute('update news set avatar=? where id=?;', [name, body.id]);

    return [name, oldName[0][0].avatar];
  },

  deleteNews: async (id) => {
    return await connection.execute('delete from news where id=?;', [id]);
  },

  deleteBid: async (id) => {
    return await connection.execute('delete from bids where id=?;', [id]);
  },

  createBid: async (body) => {
    const result = await connection.execute(
      'insert into bids(name, phone, about, casesTags_id) values(?, ?, ?, ?);',
      [body.name, body.phone, body.description, body.tagId]
    );

    return result[0].insertId;
  },
};

module.exports = database;
