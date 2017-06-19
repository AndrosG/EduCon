/**
 * Created by mra on 08/05/2017.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('v_eventos', {
        id_evento: {
            type: DataTypes.INTEGER,
            field: 'id_evento',
            primaryKey: true
        },
        fecha: {
            type: DataTypes.DATE,
            field: 'fecha'
        },
        hora: {
            type: DataTypes.STRING,
            field: 'fecha'
        },
        tipo: {
            type: DataTypes.STRING,
            field: 'tipo'
        },
        id_alumno: {
            type: DataTypes.INTEGER,
            field: 'id_alumno'
        },
        nombre_alu: {
            type: DataTypes.STRING,
            field: 'nombre_alu'
        },
        apellidos_alu: {
            type: DataTypes.STRING,
            field: 'apellidos_alu'
        },
        id_profesor: {
            type: DataTypes.INTEGER,
            field: 'id_prof'
        },
        nombre_prof: {
            type: DataTypes.STRING,
            field: 'nombre_prof'
        },
        apellidos_prof: {
            type: DataTypes.STRING,
            field: 'apellidos_prof'
        },
        descripcion: {
            type: DataTypes.STRING,
            field: 'descripcion'
        },
        visible: {
            type: DataTypes.INTEGER,
            field: 'visible'
        }
    }, {
            tableName: 'v_eventos'
        });
};
