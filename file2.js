var fs = require('fs');
fs.readFile("demo.html","utf-8",function(err,data) //read file in asynchronous way
{
    if (err)
        {
            console.log(err);
        }
        else{
            console.log(data);
        }
})
console.log("Operation completed successfully");