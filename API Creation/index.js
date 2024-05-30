var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cdac'
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sample')
    .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String, age: Number
})
const MyModel = mongoose.model("users", userSchema);

var express = require('express'); //lets require express module
// console.log(typeof express);
var app = express();
console.log(app); //multiple methods are there
app.get("/users", async function (req, res) { //1st route is created --> users is a route name 
    // res.send("Fetch Data from mongodb");
    try {
        var ans = await MyModel.find();
        res.send(ans);

    } catch (error) {
        res.send("Something went wrong");

    }
});
app.get("/mysqlusers", function (req, res) {
    connection.query("select * from emp",
        function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        });

})
app.post("/users", function (req, res) {
    res.send("store Data from mongodb");
});

app.put("/users", function (req, res) {
    res.send("Update Data from mongodb");
});

app.delete("/users", function (req, res) {
    res.send("Delete Data from mongodb");
});
app.listen(9000);