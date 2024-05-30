var fs = require('fs');
var http = require('http');//connect with server
http.createServer(function(req, res) { //req accept request in node js and res will throw some result from node js

    fs.readFile("demo.html","utf-8",function(err, data)
    {
        if(!err){
            res.end(data);
        }
    })
}).listen(9000)