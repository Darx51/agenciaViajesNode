import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';



const paginaInicio = async (req, res)=> {
  // consultar viajes del modelo viaje para cada consulta a la DB, la funciion en la q estamos se debe volver async
  // y al ser async await debemos usar un tryCatch
  const promiseDB=[];
  promiseDB.push( Viaje.findAll({limit:3}) );      // pasamos viajes al renderizar inicio
  promiseDB.push( Testimonial.findAll({limit:3}) );     /// traemos de la DB 3 testimoniales para mostrar
  try {
    //                                           Con PromiseAll las 2 consultas a la DB se haran al mismo tiempo y no la 2da hasta que termine la 1ra
    const resultado = await Promise.all( promiseDB );

    res.render('inicio', {
      pagina:'Inicio',                     // 'Inicio' solo es el texto
      clase:'home',
      viajes:resultado[0],                    // como resultado sera el Array con las 2 promesas, tendra 2 posiciones
      testimoniales:resultado[1]
    });
  } catch (error) {
    console.log(error);
  }  
}

const paginaNosotros =  (req, res)=>{     // al estar en la ruta nosotros
    res.render('nosotros', {           // dentro de este objeto le podemos pasar las variables que queramos 
      pagina:'Nosotros'                 // 'Nosotros' solo es un texto
    });                                // busca la vista o archivo llamado 'nosotros'
  }

const paginaViajes = async (req, res)=>{
  // Peticion a la base de datos 
  const viajes = await Viaje.findAll();
  //console.log(viajes);

  res.render('viajes',{           // dentro de este objeto le podemos pasar las variables que queramos 
    pagina:'Proximos Viajes',
    viajes:viajes                 // le pasamos a la vista  Viajes o al front la variable viajes con toda la informacion
  });                              
}  

/* Muestra un viaje por su slug */
const paginaDetalleViaje = async (req, res) => {
  // req.params se asocia con el parametro viaje_elegido que tenemos en el router, pero lo que se mostrara en la url, sera el contenido de ese parametro, no la palabra viaje_elegido
  //console.log(req.params.viaje_elegido);   OJO en este caso la DB requuiere un  parametro para mostrar la info                      
  const {viaje_elegido} =  req.params;                                                // extramos la variable 'viaje_elegido'

  try {
    const resultado = await Viaje.findOne({ where : {slug : viaje_elegido} });        // para no traernos todos ponemos findOne cuando el slug de la bd sea igual al viaje del parametro solicitado me traera la info
    
    res.render('viaje', {                                                              // debemos crear la pagina 'viaje' y la renderizamos y le pasamos el resultado
      pagina: 'Informacion de Viaje',
      resultado:resultado
    })
  } catch (error) {
    console.log(error);
  }
}

const paginaTestimoniales = async (req, res)=>{
  try {
    const testimoniales = await Testimonial.findAll();          // nos traemos los testimoniales y los pasamos a la vista
    //console.log(testimoniales.Testimonial);
    
    res.render('testimoniales',{           // dentro de este objeto le podemos pasar las variables que queramos 
      pagina:'Testimoniales',
      testimoniales:testimoniales,
    });

  } catch (error) {
    console.log(error);
  }
}



export{ paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje };