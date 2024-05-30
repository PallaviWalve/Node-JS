var http=require("http");//for importing use require
// console.log(http);
http.createServer(function (req,res) {
    res.end("Live server")
}).listen(9000)
//localhost:9000