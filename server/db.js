const mysql = require('mysql2/promise');

let connection = null;

( async () => {
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'trueDiplom'
    });
  
    console.log('Connected to db');
  } catch (error) {
    console.log('Error:', error);
  }
}
)()

let database = {
  checkTable: async () => {
    let reviews = null;
    try {
      reviews = await connection.execute(
        'SELECT * FROM review',
        []
      );
    } catch(e) {
      console.log(e);
    }

    if (reviews != null) {
      return reviews[0];
    }

    return null;
  } 
};

module.exports = database;