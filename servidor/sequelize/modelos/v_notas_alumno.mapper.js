/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('v_notas_alumno', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true
        },
        id_alumno: {
            type: DataTypes.INTEGER,
            field: 'id_alumno',
        },
        asignatura: {
            type: DataTypes.STRING,
            field: 'asignatura'
        },
        nombre: {
            type: DataTypes.STRING,
            field: 'nombre'
        },
        nota: {
            type: DataTypes.FLOAT,
            field: 'nota'
        },
        observaciones: {
            type: DataTypes.STRING,
            field: 'observaciones'
        }
    }, {
        tableName: 'v_notas_alumno'
    })
};
