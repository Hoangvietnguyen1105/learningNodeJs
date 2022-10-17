const Users = require('../model/Users')
const mongoose = require('../until/mongoose')
class UserController{
    User(req,res,next){
        Users.find({}) 
           .then(Users => {
           
            res.render('user/user',{Users:mongoose.multiObject(Users)})
            
           }
            )
            .catch(next)
    }
    UserDetail(req,res,next){
        Users.find({slug:req.params.slug})
            .then(Users => {
                res.render('user/userdetail',{Users:mongoose.multiObject(Users)})
            })
    }
    
    UserUpdate(req,res,next){
        Users.find({slug:req.params.slug})
            .then(Users => {
                res.render('user/userupdate',{Users:mongoose.multiObject(Users)})
            })
    }


    UserCreate(req,res,next){
        res.render('user/userAdmin')
    }
    store(req,res,next){
       
       const user = new Users(req.body)
       user.save()
            .then(res.redirect('/user'))

       
    }
    update(req,res,next){
        Users.updateOne({slug:req.params.slug}, req.body)
        .then(res.redirect('/user'))
        .catch(next)
    }
    delete(req,res,next){
        Users.delete({slug:req.params.slug})
            .then(res.redirect('/user'))
            .catch(next)
    }
    UserRedo(req,res,next){
        Users.findDeleted({})
        .then(Users => {
           
            res.render('user/redo',{Users:mongoose.multiObject(Users)})
            
           })
    }
    trueDelete(req,res,next){
        Users.deleteOne({slug:req.params.slug})
        .then(res.redirect('/user'))
    }
}
module.exports = new UserController()