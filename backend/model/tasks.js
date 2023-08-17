const connection = require("../database/index");


const getAll = (callback) => {
    const sql = 'SELECT * FROM `tasks`'
    connection.query(sql,function (error,results){
        callback(error, results)
    })
};

const add = (taskData, callback) => {
    const sql = `INSERT INTO tasks SET ?`;
    connection.query(sql, taskData, function (error, results) {
      callback(error, results);
    });
  };

const update = (taskId, updatedData, callback) => {
    const sql = `UPDATE tasks SET ? WHERE id = ?`;
    connection.query(sql, [updatedData, taskId], function(error, results) {
        callback(error, results);
    });
};


const remove = (tasksId, callback) => {
    const sql = `DELETE FROM tasks WHERE id = ?`;
    connection.query(sql, [tasksId], function(error, results) {
        callback(error, results);
    });
};
module.exports = { getAll ,
                   add,
                   update,
                   remove
                }