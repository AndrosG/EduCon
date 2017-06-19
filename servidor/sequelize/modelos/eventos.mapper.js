/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes, Sequelize) {
    var Sequelize = require('sequelize');

    return sequelize.define('eventos', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
        },
        alumno: {
            type: DataTypes.INTEGER,
            field: 'alumno',
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        },
        sesion: {
            type: DataTypes.INTEGER,
            field: 'sesion',
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            field: 'tipo',
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            field: 'descripcion'
        }
    }, {
        tableName: 'eventos'
    })
};
