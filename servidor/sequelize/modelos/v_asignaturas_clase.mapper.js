/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('v_asignaturas_clase', {
        id_clase: {
            type: DataTypes.INTEGER,
            field: 'id_clase',
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            field: 'nombre',
        },
        grupo: {
            type: DataTypes.STRING,
            field: 'grupo',
        },
        id_asignatura: {
            type: DataTypes.INTEGER,
            field: 'id_asignatura',
            primaryKey: true
        },
        asignatura: {
            type: DataTypes.STRING,
            field: 'asignatura',
        },
        id_profesor: {
            type: DataTypes.INTEGER,
            field: 'id_profesor',
        },
        profesor: {
            type: DataTypes.STRING,
            field: 'profesor',
        }
    },{
            tableName: 'v_asignaturas_clase'
    })
};
