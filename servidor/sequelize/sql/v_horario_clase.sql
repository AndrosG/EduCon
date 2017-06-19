CREATE VIEW `v_horario_clase` AS
SELECT
horario.idClase as id_clase,
CONCAT(cursos.nombre, ' ', clases.grupo) AS clase,
horario.diaSemana as dia_semana,
sesiones.hora as hora,
asig.nombre as asignatura,
CONCAT(prof.nombre, ' ', prof.apellidos) AS profesor
FROM
horario
LEFT JOIN clases ON clases.id = horario.idClase
LEFT JOIN cursos ON cursos.id = clases.curso
LEFT JOIN sesiones ON sesiones.id = horario.idSesion
LEFT JOIN asignaturas asig ON asig.id = horario.idAsignatura
LEFT JOIN profesores prof ON prof.id = horario.idProfesor