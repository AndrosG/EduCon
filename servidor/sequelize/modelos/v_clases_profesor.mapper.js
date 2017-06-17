/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('v_clases_profesor', {
        id_profesor: {
            type: DataTypes.INTEGER,
            field: 'id_profesor',
            primaryKey: true
        },
        id_clase: {
            type: DataTypes.INTEGER,
            field: 'id_clase',
        },
        curso: {
            type: DataTypes.STRING,
            field: 'curso'
        },
        grupo: {
            type: DataTypes.STRING,
            field: 'nombre'
        }
    }, {
        tableName: 'v_clases_profesor'
    })
};
