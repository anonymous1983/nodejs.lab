var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');


app.configure(function(){
    app.use(express.bodyParser());      // Parses incoming request date.
    app.use(app.router);                // Mount application routes
    app.use(express.static(__dirname + '/assets'));
	app.use(express.static(__dirname + '/media'));
});

// Chargement de la page index.html
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/master.html', function (req, res) {
  res.sendfile(__dirname + '/master.html');
});
app.get('/joueura.html', function (req, res) {
  res.sendfile(__dirname + '/joueura.html');
});
app.get('/joueurb.html', function (req, res) {
  res.sendfile(__dirname + '/joueurb.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.set('pseudo', pseudo);
        socket.broadcast.emit('nouveau_client', pseudo);
    });
	socket.on('nouveau_client_a', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.set('pseudo', pseudo);
        socket.broadcast.emit('nouveau_client_a', pseudo);
    });
	socket.on('nouveau_client_b', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.set('pseudo', pseudo);
        socket.broadcast.emit('nouveau_client_b', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        socket.get('pseudo', function (error, pseudo) {
            message = ent.encode(message);
            socket.broadcast.emit('message', {pseudo: pseudo, message: message});
        });
    });
	socket.on('message_a', function (message) {
        socket.get('pseudo', function (error, pseudo) {
            message = ent.encode(message);
            socket.broadcast.emit('message_a', {pseudo: pseudo, message: message});
        });
    });
	socket.on('message_b', function (message) {
        socket.get('pseudo', function (error, pseudo) {
            message = ent.encode(message);
            socket.broadcast.emit('message_b', {pseudo: pseudo, message: message});
        });
    });
	
	socket.on('update_pos_a', function (html) {
        socket.get('pseudo', function (error, pseudo) {
            //html = ent.encode(html);
            socket.broadcast.emit('update_pos_a', {pseudo: pseudo, html: html});
        });
    });
	socket.on('update_pos_b', function (html) {
        socket.get('pseudo', function (error, pseudo) {
            //html = ent.encode(html);
            socket.broadcast.emit('update_pos_b', {pseudo: pseudo, html: html});
        });
    });
	
	
	
});

server.listen(8080);
