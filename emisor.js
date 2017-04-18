var eventos = require('events');

var EmisorEventos = eventos.EventEmitter;

var emisora = new EmisorEventos();
var emisorb = new EmisorEventos();

var inc = 1;

emisora.on('datos', function(fecha){
  console.log("fecha");
   console.log(fecha);
});

emisorb.on('suma', function(suma){
  console.log("suma");
   console.log(suma);
});



setInterval(function(){
   emisora.emit('datos', Date.now());
}, 500);

setInterval(function(){
   emisorb.emit('suma', inc++);
}, 500);
