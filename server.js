const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.url==="/")
    { 
        res.setHeader("Content-Type","text/html");
        res.write("<h1>WELCOME!!!!</h1>");
        res.end(); //to send data
    }

    if(req.url==="/sourcecode")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<h1>THIS IS THE SOURCE Code page if you want to access the source code you have to pay 2000 okay??!!!!</h1>");
        res.end();
    }
    
}); //event emmitters


const PORT=3000;
server.listen(PORT, () => 
{
    console.log(`LISTENING ON PORT ${PORT}`);
});


