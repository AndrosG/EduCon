/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('notas', {
        alumno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'alumnos',
                key: 'id',
            }
        },
        asignatura: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'asignaturas',
                key: 'id',
            }
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'titulo'
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
