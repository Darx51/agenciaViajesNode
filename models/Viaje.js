import { Sequelize } from "sequelize";
import db from '../config/db.js';


// en caso de no agregar un campo o columna de la base de datos, al momento de 
// hacer la consulta, no nos traera dicha columna
export const Viaje = db.define('viajes', {
  titulo:{
    type: Sequelize.STRING
  },
  precio:{
    type: Sequelize.STRING
  },
  fecha_ida:{
    type: Sequelize.DATE
  },
  fecha_vuelta:{
    type: Sequelize.DATE
  },
  imagen:{
    type: Sequelize.STRING
  },
  descripcion:{
    type: Sequelize.STRING
  },
  disponibles:{
    type: Sequelize.STRING
  },
  slug:{
    type: Sequelize.STRING
  },
});
