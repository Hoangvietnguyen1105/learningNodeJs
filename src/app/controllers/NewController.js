const Users = require('../model/Users')

class NewController {
  index(req, res) {
    Users.find({}, function (err, Users) {
      if(!err){
          res.json(Users)
      }
      else{
          res.status(400).json("khong the truy cap")
      }
    });
  }
  show(req, res) {
    res.render('new');
  }
}
module.exports = new NewController();
