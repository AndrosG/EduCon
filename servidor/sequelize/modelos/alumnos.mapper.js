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
            field: 'nombre',
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            field: 'apellidos',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            allowNull: false
        },
        telefono: {
            type: DataTypes.INTEGER,
            field: 'telefono',
            allowNull: false
        },
        clase: {
            type: DataTypes.INTEGER,
            field: 'clase',
            references: {
                model: 'clases',
                key: 'id',
            }
        },
        contra: {
            type: DataTypes.STRING,
            field: 'contra'
        }
    }, {
        tableName: 'alumnos'
    })
};
