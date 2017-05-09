/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('profesores', {
        id_alu: {
            type: DataTypes.INTEGER,
            field: 'idProfesor',
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            field: 'nombre'
        },
        apellidos: {
            type: DataTypes.STRING,
            field: 'apellidos'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        telefono: {
            type: DataTypes.INTEGER,
            field: 'telefono'
        },
        departamento: {
            type: DataTypes.INTEGER,
            field: 'departamento'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        }
    }, {
        tableName: 'profesores'
    })
};