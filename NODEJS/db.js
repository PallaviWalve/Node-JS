const mongoose = require('mongoose'); //copied form npmjs.com mongoose
async function connection(){  //this fun perform db connection
    var ans = await mongoose.connect("mongodb+srv://admin:admin@cluster0.r5oq3uq.mongodb.net/sample"); //custome module
   // console.log(ans);
}
 module.exports = connection;