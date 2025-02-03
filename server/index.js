const http = require('http'); //Import Node.js core module

const hostname = "localhost"; //Localhost
const port = 8000; //port number

//กำหนด listener ให้กับ server เมื่อเปิด เว็บไที่ http://localhost:8000 จะเรียกใช้ function requireListener
const requireListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!"); //end the response
}

const server = http.createServer(requireListener); //create server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});     