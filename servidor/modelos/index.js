/**
 * Created by mra on 08/05/2017.
 */

var Sequelize = require('sequelize');

// inicializacion de conexion BD
var sequelize = new Sequelize('educon', 'root', 'password', {
    host: '92.186.42.58',
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
    'cursos'
];
modelos.forEach(function(modelo) {
    module.exports[modelo] = sequelize.import(__dirname + '/' + modelo);
});

// descripcion de relaciones entre modelos
(function(m) {
    m.film_actor.belongsTo(m.actor, {foreignKey: 'actor_id'});
    m.film_actor.belongsTo(m.film, {foreignKey: 'film_id'});
    m.actor.hasMany(m.film_actor, {foreignKey: 'actor_id'});
    m.film.hasMany(m.film_actor, {foreignKey: 'film_id'});
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
