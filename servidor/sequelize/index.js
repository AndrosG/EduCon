/**
 * Created by mra on 08/05/2017.
 */

var Sequelize = require('sequelize');

// inicializacion de conexion BD
var sequelize = new Sequelize('u686993630_educo', 'root', 'educon', {
    host: 'educon.esy.es',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    },
    // SQLite only
    //storage: 'path/to/database.sqlite'
});

// carga de modelos
var modelos = [
    'profesores',
    'alumnos',
    'cursos',
    'asignaturas',
    'notas'
];
modelos.forEach(function (modelo) {
    module.exports[modelo] = sequelize.import(__dirname + '/modelos/' + [modelo] +'.mapper.js');
   // module.exports[modelo] = sequelize.import(__dirname + '/servicios/' + [modelo] +'.srv.js');
});

// descripcion de relaciones entre modelos
(function (m) {
    /*m.film_actor.belongsTo(m.actor, {foreignKey: 'actor_id'});
     m.film_actor.belongsTo(m.film, {foreignKey: 'film_id'});
     m.actor.hasMany(m.film_actor, {foreignKey: 'actor_id'});
     m.film.hasMany(m.film_actor, {foreignKey: 'film_id'});*/
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
