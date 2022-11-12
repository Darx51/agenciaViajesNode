//const express = require('express');
import express  from 'express';
import router from './routes/Router.js';

import db from './config/db.js';
//import dotenv from 'dotenv';


//dotenv.config()




const app = express();

// conectar la base de datos
db.authenticate()
  .then(()=> console.log('BD CONECTADA'))
  .catch( error => console.log(error) );

// definir puerto
const port = process.env.PORT || 4000;  //en produccion asignaara un peurto, en desarrollo sera el 4000

//Habilitar PUG
app.set('view engine', 'pug');

//obtener el anio actual la obtenemos de una variable de la app 
app.use((req, res, next) => {
  //res.locals.unaVariable = 'Una Nueva Variable';            la variable llamada 'unaVariable' es quien pasariamos como parametro
  const year = new Date();
  res.locals.actualYear = year.getFullYear();       
  res.locals.nombreSitio = 'Agencia';       
  //console.log(res.locals.actualYear);

  next();               // consitnua a ejecutar la siguiente linea de codigo
  // return next();    //obliga a ejecutar el siguiente codigo
});


// Agregar body parser para que el servidor pueda leer el request que nos envio los datos del formulario
// algun cliente
app.use(express.urlencoded({extended: true}));

//definir cual sera la carpeta publica que es de donde tomara las imagenes y los estilos css sin importar desde que carpeta estemos
app.use(express.static('public'));                          // static para archivos estaticos
// para que cargue el CSS debo ponerle  /viajes/ ya que el parametro que estara cambiando se considera de 2do orden
app.use('/viajes/', express.static('public'));              
app.use('/viajes/viaje-italia/', express.static('public'));     // este de Italia lo tuve que hacer manual porque no detectaba el CSS         
//app.use('/bloque_testimoniales/', express.static('public')); 


// agregar router
app.use('/', router);       //router contiene las rutas a las que ira el usuario



// ARRANCAMOS EL servidor y nos sercioramos que funcione primero
app.listen(port, () => {
  console.log(`servidor funcionando en el puerto ${port}`);
})