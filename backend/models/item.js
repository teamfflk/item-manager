const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description:String,
  quantitiy:Number,
  author:String,
  
  status: {
    type:String,
    default:"avaliable"
  },

  createdAt:{
    type:Date,
    default:Date.now
  }
  
  
});
module.exports = mongoose.model("Item", itemSchema);
