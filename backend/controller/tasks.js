const {getAll,add,update,remove} = require("../model/tasks")

const getTasks = (req, res) => {
getAll((err,results)=>{
err ? res.status(500).json(err) : res.status(200).json(results)
})

};

const addtasks = (req, res) => {
  const taskData = req.body; // Extract task data from the request body
  
  add(taskData, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error); // Use 500 for internal server error
    } else {
      res.status(201).json(results); // Use 201 for successful creation
    }
  });
};

const Update = (req, res) => {
    console.log(req.params,"params");
const {id}=req.params
    const updatedData = req.body;
    update(id, updatedData, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };
  
  const Remove = (req, res) => {
    const id = req.params.id;
  
    remove(id, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };
module.exports = {
  getTasks,
  addtasks,
  Update,
  Remove
};
