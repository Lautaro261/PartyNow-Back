require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/partynow`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring




/////// ACA IMPORTAMOS LOS MODELOS /////// 
const {
   Assigned,
   Establishment,
   Event,
   Follower,
   Review,
   Series,
   Ticket,
   User,
   Rol,
   Workpeople,
   Requests,

} = sequelize.models


/////// ACA VIENEN LAS RELACIONES ///////

//Usuario con la tabla seguidores
User.hasMany(Follower, { as: 'customers', foreignKey: 'customersId' });
User.hasMany(Follower, { as: 'organizers', foreignKey: 'organizersId' });

//Rol con usuario
Rol.hasMany(User);
User.belongsTo(Rol);

// Usuario con Review
User.hasMany(Review);
Review.belongsTo(User);

// Tabla usuario con establecimiento
User.hasMany(Establishment);
Establishment.belongsTo(User);

//User con Evento
User.hasMany(Event);
Event.belongsTo(User);

//User con trabajadores
User.hasMany(Workpeople, { as: 'workers', foreignKey: 'workersId' });
User.hasMany(Workpeople, { as: 'organizer', foreignKey: 'organizerId' });

//User con Ticket
User.hasMany(Ticket);
Ticket.belongsTo(User);

//Establecimiento con Evento
Establishment.hasMany(Event);
Event.belongsTo(Establishment);

//Evento y Trabjadores con la tabla Asigned
Workpeople.hasMany(Assigned, { as: 'worker', foreignKey: 'workerId' });
Event.hasMany(Assigned, { as: 'Event', foreignKey: 'EventId' });

//Evento con las peticiones
Requests.belongsTo(Event);
Event.hasOne(Requests);

//Evento con las series
Event.hasMany(Series);
Series.belongsTo(Event);

//Series con Ticket
Series.hasMany(Ticket);
Ticket.belongsTo(Series);

//Assigned con Tickets
Assigned.hasMany(Ticket);
Ticket.belongsTo(Assigned);


/////// ACA VIENEN LAS RELACIONES ///////


module.exports = {
   ...sequelize.models, 
   conn: sequelize, 
};