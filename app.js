var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');
	
	var mysql = require('mysql');
	
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : ''
	});
	
	connection.query('USE tunisiana');


app.configure(function(){
    app.use(express.bodyParser());      // Parses incoming request date.
    app.use(app.router);                // Mount application routes
    app.use(express.static(__dirname + '/assets'));
	app.use(express.static(__dirname + '/media'));
    app.use(express.static(__dirname + '/DB'));
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

    socket.on('client_a_win', function () {
        socket.get('pseudo', function (error, pseudo) {
            //html = ent.encode(html);
			var  list_cadeaux='';
			connection.query('SELECT description FROM  `cadeaux` WHERE DATE =  "'+printDate()+'" AND cnt !=0 ORDER BY RAND() LIMIT 1', function(err, rows){
				list_cadeaux = rows;
				connection.query('UPDATE  cadeaux AS C SET  C.cnt =  (C.cnt - 1) WHERE  DATE =  "'+printDate()+'" AND description = "'+list_cadeaux[0].description+'"');
				console.log(printDate());
				console.log('---------------');
				console.log(list_cadeaux[0].description);
				socket.broadcast.emit('client_win', {pseudo: pseudo, client: 'a', cadeau : list_cadeaux[0].description});
			  });
        });
		socket.broadcast.emit('client_b_lose');
		
    });


    socket.on('client_b_win', function () {
        socket.get('pseudo', function (error, pseudo) {
            //html = ent.encode(html);
			var  list_cadeaux='';
			connection.query('SELECT description FROM  `cadeaux` WHERE DATE =  "'+printDate()+'" AND cnt !=0 ORDER BY RAND() LIMIT 1', function(err, rows){
				list_cadeaux = rows;
				connection.query('UPDATE  cadeaux AS C SET  C.cnt =  (C.cnt - 1) WHERE  DATE =  "'+printDate()+'" AND description = "'+list_cadeaux[0].description+'"');
				console.log(printDate());
				console.log('---------------');
				console.log(list_cadeaux[0].description);
				socket.broadcast.emit('client_win', {pseudo: pseudo, client: 'b', cadeau : list_cadeaux[0].description});
			  });
			  
			  socket.broadcast.emit('client_a_lose');
            
        });
    });





});

server.listen(8080);

function printDate() {
    var temp = new Date();
    var dateStr = padStr(temp.getFullYear()) +'-'+
                  padStr(1 + temp.getMonth()) +'-'+
                  padStr(temp.getDate());
    return dateStr;
}

function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}
