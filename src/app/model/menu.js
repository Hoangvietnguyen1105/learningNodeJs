const mongoose = require('mongoose');
const Schema = mongoose.Schema
const menu = new Schema({
    name: { type: String, default: '' },
    description: { type: String,default:'' },
    price: { type: String, default:'' },
   
  });
  module.exports = mongoose.model('menu',menu);