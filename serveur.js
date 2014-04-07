var http = require('http');

// Code identique au précédent

var instructionsNouveauVisiteur = function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
}

var server = http.createServer(instructionsNouveauVisiteur);

server.listen(8080);