var http = require('http');
var fs = require('fs');
const PORT= process.env.PORT||5700;
 var server= http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('resume.html',null,function(error,data){
        if(error){
            res.writeHead(404);
            res.write('File not Found!')
        }else{
            res.write(data);

        }
        res.end();


    });
    


});
server.listen(PORT,()=>{
        console.log('Server running on port'+PORT)
});