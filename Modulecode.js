const http=require("http");
var Modules = require("./Modules");

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h2>Hello World</h2>");
    res.write("My name is "+ Modules.PrintMyName());
    res.write("<br>I am currently doing my Bachelors degree of Computer Science from SZABIST.");
    res.write("<br>I am enrolled in a course named Web Technologies-I. This is my first Program of NodeJS and i am very excited to learn and work more on this! &#128513"); 
    res.end("<br>Today's Date is "+ Modules.GiveDate());


}).listen(8080,()=>
    console.log("Server is running at http://localhost:8080"));

