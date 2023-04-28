const http = require('http')
const server = http.createServer((req,res)=>{
   if (req.url === '/'){
    res.end("Welcome to the HomePage");
    return
   }
   if (req.url === '/about'){
    res.end('Here is our short history');
    return
   }
   res.end(`<h1>Ooops!</h1>
   <p>There is no page displaying</p>
   <a href="/">back home</a>`)

})

server.listen(5000)