CREATE VIEW v_notas_alumno AS
    SELECT 
        alu.id AS id_alumno,
        notas.id AS id,
        asig.nombre AS asignatura,
        notas.nombre AS nombre,
        notas.nota AS nota,
        notas.observaciones AS observaciones
    FROM
        notas
        LEFT JOIN alumnos alu ON alu.id = notas.alumno
        LEFT JOIN asignaturas asig ON asig.id = notas.asignatura