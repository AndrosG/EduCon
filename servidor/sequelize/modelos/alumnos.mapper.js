/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('alumnos', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
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
        curso: {
            type: DataTypes.INTEGER,
            field: 'curso',
            references: {
                model: 'cursos',
                key: 'id',
            }
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        }
    }, {
        tableName: 'alumnos'
    })
};
