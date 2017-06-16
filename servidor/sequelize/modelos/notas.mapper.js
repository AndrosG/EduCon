/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('notas', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true
        },
        alumno: {
            field: 'alumno',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'alumnos',
                key: 'id',
            }
        },
        asignatura: {
            field: 'asignatura',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'asignaturas',
                key: 'id',
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
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
        tableName: 'notas'
    })
};
