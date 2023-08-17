const {getAll,add,addUser,getUserByEmail} = require("../model/users")

const getUsers = (req, res) => {
getAll((err,results)=>{
err ? res.status(500).json(err) : res.status(200).json(results)
})

};

const addUsers = (req,res)=>{
add((err,results)=>{
  err ? res.status(501).json(err) : res.status(201).json(results)
},req.body)
}
const signUp = (req, res) => {
  const userData = req.body;
 addUser(userData, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json(result);
    }
  });
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  getUserByEmail(email, (err, user) => {
    if (err) {
      res.status(500).json(err);
    } else if (!user) {
      res.status(401).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'Successfully signed in' });
    }
  });
};

module.exports = {
  getUsers,
  addUsers,
  signUp,
  signIn
};
