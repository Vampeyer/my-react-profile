const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} by method ${req.method}`);

  // Parse the URL to determine the requested file
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html'; // Default to index.html
  } 

  if (filePath === './about') {
    filePath = './about.html'; // Default to index.html
  } 


  // Determine the content type based on the file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
  }[extname] || 'text/plain';

  // Read the requested file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        // Other error
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>500 Internal Server Error</h1><pre>${err}</pre>`);
      }
    } else {
      // File found, send it as response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data, 'utf-8');
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});