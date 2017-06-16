/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clases', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true
        }, grupo: {
            type: DataTypes.STRING,
            field: 'grupo',
            allowNull: false
        }, tutor: {
            type: DataTypes.INTEGER,
            field: 'tutor',
            references: {
                model: 'profesores',
                key: 'id',
            }
        }, curso: {
            type: DataTypes.INTEGER,
            field: 'curso',
            allowNull: false,
            references: {
                model: 'cursos',
                key: 'id',
            }
        },
        {
            tableName: 'clases'
        })
};
