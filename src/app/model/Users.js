const mongoose = require('mongoose');
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug)
const Users = new Schema({
    name: { type: String, default: '' },
    age: { type: String,default:'' },
    phone: { type: String, default:'' },
    mail:{type: String, default:''},
    slug:{type:String,slug:'name',unique:true},
    
  },{ versionKey: false,
      timestamps:true });
Users.plugin(mongoose_delete,{
    deletedAt:true,
    overrideMethods:'all'})
  module.exports = mongoose.model('users',Users);
