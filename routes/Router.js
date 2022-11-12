import express from 'express';

import  {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje}  from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

// creamos una instancia de express y usamos su router para no usar app.get como en el archivo de la app
const router = express.Router();     

// Probando con una peticion GET
// EL CONTROLADOR DETECTA QUE ESTAMOS EN LA RUTA '/' inidica que esta es la ruta raiz y
// nos traera la paginaInicio del backend y la mostrara al frontend
router.get('/', paginaInicio);                     
// Aqui en ves de app.get usaremos router.get 

router.get('/nosotros', paginaNosotros );

router.get('/viajes', paginaViajes);                              // con esta ruta cargara paginaViajes
router.get('/viajes/:viaje_elegido', paginaDetalleViaje);         // cargara 'paginaDetalleViaje' con el parametro que estara cambiando sera 'viaje_elegido'
router.get('/:viaje_elegido', paginaDetalleViaje);         // cargara 'paginaDetalleViaje' con el parametro que estara cambiando sera 'viaje_elegido'

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);




// exportamos el router para agregarlo a app
export default router;