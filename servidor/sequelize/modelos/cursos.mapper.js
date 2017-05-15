/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('cursos', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            field: 'nombre'
        },
        tutor: {
            type: DataTypes.INTEGER,
            field: 'tutor',
            references: {
                model: 'asignaturas',
                key: 'id',
            }
        }
    }, {
        tableName: 'cursos'
    })
};
