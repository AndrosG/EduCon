/**
 * Created by mra on 08/05/2017.
 */

var Sequelize = require('sequelize');

// inicializacion de conexion BD
var sequelize = new Sequelize('educon', 'root', 'educon', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 1,
        min: 1,
        idle: 1000
    },
    // SQLite only
    //storage: 'path/to/database.sqlite'
});

// carga de modelos
var modelos = [
    'alumnos',
    'asignaturas',
    'cursos',
    'eventos',
    'notas',
    'profesores',
    'v_alumno',
    'v_asignaturas_clase',
    'v_clases_profesor',
    'v_eventos',
    'v_horario_clase',
    'v_notas_alumno'
];

modelos.forEach(function (modelo) {
    module.exports[modelo] = sequelize.import(__dirname + '/modelos/' + [modelo] +'.mapper.js');
});

//Las relaciones entre tablas se realizan en los campos de las tablas.

// export connection
module.exports.sequelize = sequelize;
