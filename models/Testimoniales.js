import { Sequelize } from "sequelize";
import db from '../config/db.js';


// en caso de no agregar un campo o columna de la base de datos, al momento de 
// hacer la consulta, no nos traera dicha columna
export const Testimonial = db.define('testimoniales', {
  // el id no es necesario porque el ORM da por hecho que la tabla en la DB ya lo tiene
  nombre:{
    type: Sequelize.STRING
  },
  correo:{
    type: Sequelize.STRING
  },
  mensaje:{
    type: Sequelize.STRING
  }
});
