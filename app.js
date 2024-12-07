// app.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`오픈소스소프트웨어 2191232 김환희  JS Server is  running at http://${hostname}:${port}/ 실행중`);
});

module.exports = server;
