import { Testimonial } from "../models/Testimoniales.js";


const guardarTestimonial = async (req, res) =>{
  console.log(req.body);

  // validar que los datos que nos envio el cliente sean validos, si no, nosotros como servidor le notificaremos que los datos no son validos...
  const {nombre, correo, mensaje} = req.body;
  const errores= [];

  if(nombre.trim()===''){                                     // si algun campo esta vacio
    errores.push({mensaje:'El nombre esta vacio'});            // si hay un error se lo enviamos al array 'errores' en formato objeto
  }
  if(correo.trim()===''){
    errores.push({mensaje:'El correo esta vacio'});
  }
  if(mensaje.trim()===''){
    errores.push({mensaje:'El mensaje esta vacio'});
  }
  //console.log(errores);
  if(errores.length > 0){
    // consultar testimoniales existentes para tambien pasarselos al renderizar la pagina y no nos marque error length
    const testimoniales = await Testimonial.findAll();

    //mostrar la vista con errores, antes si faltaba un campo se quedaba cargando, ahora ya no lo hara
    res.render('testimoniales',{                  // render recibo 2 parametros, la pagina a donde ira y lo que le enviaremos
      pagina: 'Testimoniales',                     // OJO al recibir el Array 'errores' en testimoniales
      errores,                                     // debemos convertirlo con STRINGIFY a JSON o Objeto Javascript para poderlo mostrar
      nombre:nombre,                               // O extraerlo recorriendolo y extrayendo cada error como objeto independiente que es
      correo:nombre,
      correo:correo,                               // pasaremos los valores de cada inpout, para que guarde lo que anteriormente el usuario ya ha ingresado
      mensaje:mensaje,                             // el render ya los enviara, por lo que los podremos extraer tal cual
      testimoniales:testimoniales                 // testimoniales se querian mostrar pero como no los recibia en el render daba error
      
    })                                          
  }else{
    // almacenar en la base de datos

    
    try {
      await Testimonial.create({              // envia lo insertado a la base de datos dentro de un objeto
        nombre:nombre,
        correo:correo,
        mensaje:mensaje
      });
      // para que la pagina no se quede cargando le indicamos que me rediriga a la misma pagina de testimoniales
      res.redirect('/testimoniales');
    } catch (error) {
      console.log(error);
    }

  }                                              
}

export {guardarTestimonial};