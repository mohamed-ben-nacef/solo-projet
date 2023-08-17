const connection = require("../database/index");

const getAll = (callback) => {
    var sql  =`select * from users`
    connection.query(sql,(err,results)=>{ 
callback(err,results)
    })
}

const add = (callback,data) =>{
    var sql =`insert into users (email,password) values(?,?)`
    connection.query(sql,[data.email,data.password],(err,results)=>{
callback(err,results)
    })
}
const addUser = (userData, callback) => {
    const { email, password } = userData;
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    connection.query(query, [email, password], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  };
  
  const getUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  };

module.exports = { getAll,add ,addUser,getUserByEmail};