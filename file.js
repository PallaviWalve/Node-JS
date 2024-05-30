var fs = require('fs');//import fs module
var ans = fs.readFileSync("demo.html", "utf-8");//read file in synchronous way
console.log(ans);
console.log("file operations completed");