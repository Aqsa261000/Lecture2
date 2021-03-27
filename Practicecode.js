const http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h2>Hello World</h2>");
    res.write("My name is Aqsa.<br>");
    res.write("I am currently doing my Bachelors degree of Computer Science from SZABIST.<br>");
    res.end("I am enrolled in a course named Web Technologies-I. This is my first Program of NodeJS and i am very excited to learn and work more on this! &#128513"); 
    
}).listen(8080,()=>
    console.log("Server is running at http://localhost:8080"));

