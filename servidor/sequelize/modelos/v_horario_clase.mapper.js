/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('v_horario_clase', {
        id_clase: {
            type: DataTypes.INTEGER,
            field: 'id_clase',
            primaryKey: true
        },
        clase: {
            type: DataTypes.STRING,
            field: 'clase'
        },
        dia_semana: {
            type: DataTypes.STRING,
            field: 'dia_semana',
            primaryKey: true
        },
        hora: {
            type: DataTypes.STRING,
            field: 'hora',
            primaryKey: true
        },
        asignatura: {
            type: DataTypes.STRING,
            field: 'asignatura'
        },
        profesor: {
            type: DataTypes.STRING,
            field: 'profesor'
        },
    }, {
        tableName: 'v_horario_clase'
    })
};
