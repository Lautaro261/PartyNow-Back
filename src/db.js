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
   Event,
   Follower,
   Location,
   Menu,
   Permission,
   Place,
   Profile,
   Requests,
   Review,
   Rol,
   Series,
   SubMenu,
   Ticket,
   TypeOfPlace,
   User

} = sequelize.models


/////// ACA VIENEN LAS RELACIONES ///////

//Usuario con Persona
Profile.hasOne(User);
User.belongsTo(Profile);

//Usuario con Seguidores
User.hasMany(Follower, { as: 'customers', foreignKey: 'customersId' });
User.hasMany(Follower, { as: 'organizers', foreignKey: 'organizersId' });

//Rol con Usuario 
Rol.hasMany(User);
User.belongsTo(Rol);

//Rol con permiso
Rol.hasMany(Permission);
Permission.belongsTo(Rol);

//Permisos con subMenu
SubMenu.hasMany(Permission);
Permission.belongsTo(SubMenu);

//Menu con SubMenu
Menu.hasMany(SubMenu);
SubMenu.belongsTo(Menu);

//Usuario con Evento
User.hasMany(Event);
Event.belongsTo(User);

//Evento con request
Event.hasMany(Requests);
Requests.belongsTo(Event);

//Usuario con Reviws
User.hasMany(Review);
Review.belongsTo(User);

//Evento con Reviews
Event.hasMany(Review);
Review.belongsTo(Event);

//Evento con serie
Event.hasMany(Series);
Series.belongsTo(Event);

//Series con ticket;
Series.hasMany(Ticket);
Ticket.belongsTo(Series);

//Usuario con lugar
User.hasMany(Place);
Place.belongsTo(User);

//Tipo de lugar con Lugar
TypeOfPlace.hasMany(Place);
Place.belongsTo(TypeOfPlace);

//Localización con lugar
Location.hasMany(Place);
Place.belongsTo(Location);

//Evento con asignar
Event.hasMany(Assigned);
Assigned.belongsTo(Event);

//Usuario con Asignar
User.hasMany(Assigned);
Assigned.belongsTo(User);

//Asignar con Ticker
Assigned.hasMany(Ticket);
Ticket.belongsTo(Assigned);

//Cliente y RPPS con Ticket
User.hasMany(Ticket, { as: 'Cliente', foreignKey: 'clientId' });
User.hasMany(Ticket, { as: 'Rpps', foreignKey: 'rppsId' });


module.exports = {
   ...sequelize.models, 
   conn: sequelize, 
};