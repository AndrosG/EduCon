/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('profesores', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            field: 'nombre',
            validate: {
                notNull: true
            }
        },
        apellidos: {
            type: DataTypes.STRING,
            field: 'apellidos',
            validate: {
                notNull: true
            }
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            validate: {
                isEmail: true
            }
        },
        telefono: {
            type: DataTypes.INTEGER,
            field: 'telefono',
            validate: {
                notNull: true
            }
        },
        departamento: {
            type: DataTypes.INTEGER,
            field: 'departamento',
            validate: {
                notNull: true
            }
        },
        usuario: {
            type: DataTypes.STRING,
            field: 'usuario'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        }
    }, {
        tableName: 'profesores'
    })
};