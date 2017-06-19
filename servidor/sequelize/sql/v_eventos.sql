CREATE VIEW v_eventos AS
SELECT 
        eventos.id AS id_evento,
        eventos.fecha AS fecha,
        sesion.hora AS hora,
        eventos.tipo AS tipo,
        alumno.id AS id_alumno,
        alumno.nombre AS nombre_alu,
        alumno.apellidos AS apellidos_alu,
        eventos.descripcion AS descripcion
    FROM
        eventos
        LEFT JOIN alumnos alumno ON alumno.id = eventos.alumno
        LEFT JOIN sesiones sesion ON sesion.id = eventos.sesion