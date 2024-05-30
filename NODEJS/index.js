var bodyParser = require('body-parser')//to accept incoming values
var cors = require("cors");
var connection = require("./db.js")
connection()

var MyModel = require("./models/usermodel.js")

var express = require('express'); //third party module from nodejs
var app = express(); //use express as a function

app.use(cors()); //

app.use(bodyParser.urlencoded({ extended: false })) //the the data in terminal
app.use(bodyParser.json()); 

// create 3 routes for form creation
app.get('/register', function (req, res) {

});
app.get('/login', function (req, res) {

});
app.get('/users', async function (req, res) {
    try {
        var ans = await MyModel.find()
        res.send(ans)
        // res.render("userdata.ejs", { data: ans })  //redering the webpage
    } catch (error) {
        res.send("Something went wrong")
    }
});
app.get("/add-user", function (req, res) {
    res.render("adduser.ejs")
});
app.post("/user-action", async function (req, res) {
// console.log(req.body);
try {
    var record = new MyModel(req.body); //passing name and age through req.body to fun
    var ans = await record.save(); //save the record
    // res.redirect("/users");  //redirecting back to the user

    res.send({"Message":"Record Inserted Successfully"})

} catch (error) {
    
}
});
app.listen(8000);