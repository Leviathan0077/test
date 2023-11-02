const http = require('http'); //to import server

const server = http.createServer( //method to creeate server.
    createServerCallbackFunction //creates a server here
)
function createServerCallbackFunction(req,res){
    let a=[];
    if(req.method == "GET"){
    }

        else if(req.method == "POST"){
            a.push(1);

        }
        else if(req.method == "PUT"){
            a[1] = 2;

        }
        else if(req.method == "DELETE"){
            a.pop();

        }
        res.write(JSON.stringify(a));
        res.end();
    }


server.listen(7000,function(){
    
    
    

});