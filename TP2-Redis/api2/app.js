const redis = require('redis');
const express = require('express');
var port = 3000;
var app = express();
const bodyParser = require ('body-parser')

var  client = redis.createClient(6379, 'localhost');

app.set('port', port);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

client.on('connect', function(){
    console.log('Conectado a redis server');
})

//--------------------------------- AGREGAR PERSONAJE--------------------------------------
app.get('/add', (req,res, next) => {
    res.sendFile(__dirname + '/views/add.html')
})


app.post('/add', function (req,res, next) {
    var nombre = req.body.nombre;
    var episodio = req.body.episodio;
    client.lpush(episodio, nombre,function (err, reply) {
        if (err){
            console.log(err);
        }
        console.log(reply);
        res.redirect('/')
    })
})


//--------------------------------- ELIMINAR PERSONAJE-----------------------
app.get('/del',(req, res) => {
    res.sendFile(__dirname + '/views/del.html')
})

app.post('/del', function (req,res,next) {
    var nombredel = req.body.nombredel;
    var episodiodel = req.body.episodiodel; 

    client.lrem(episodiodel, -1,nombredel, function(err, reply) {
        if (err){
            console.log(err);
        }
        console.log(reply);
        res.redirect('/del')
    })

})

//-------------------------------------------------------------------

app.get('/listar', (req,res,next)=>{
    res.sendFile(__dirname + '/views/listar.html')
})

app.post('/listar',function(req,res,next){
    var episodioL = req.body.episodioL
    
    client.lrange (episodioL, 0, -1, function(err,value){
            res.write('<div>')
            res.write('<ul class="list-group">')
            res.write(`<li class="list-group-item active">${episodioL}`)
            res.write('</li>')
            res.write(`<li class="list-group-item">${value}`)
            res.write('</li>')
            res.write('</ul>')
            res.write('</div>')
        })

})


app.listen(app.get('port'),(err) => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})