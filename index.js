const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;
const staticDir = ['public', 'dist'];

const server = http.createServer((req, res) => {
  if (!shouldServeStaticOn(req.url)) {
    req.url = '/public/index.html';
  }

  respondWithStaticFile(req, res);
});

function shouldServeStaticOn(url) {
  return staticDir.some((dir) => {
    return new RegExp('^/' + dir).test(url);
  });
}

function respondWithStaticFile(req, res) {
  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));

      return;
    }

    res.writeHead(200);
    res.end(data);
  });
}

server.listen(port);