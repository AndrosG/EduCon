/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('v_alumno', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            field: 'nombre',
        },
        apellidos: {
            type: DataTypes.STRING,
            field: 'apellidos',
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
        },
        telefono: {
            type: DataTypes.INTEGER,
            field: 'telefono',
        },
        contra: {
            type: DataTypes.STRING,
            field: 'contra'
        },
        curso: {
            type: DataTypes.STRING,
            field: 'curso'
        },
        id_clase: {
            type: DataTypes.INTEGER,
            field: 'id_clase'
        },
        grupo: {
            type: DataTypes.STRING,
            field: 'grupo'
        }
    }, {
        tableName: 'v_alumno'
    })
};
