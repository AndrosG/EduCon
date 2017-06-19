CREATE VIEW v_asignaturas_clase AS
select
clases.id AS id_clase,
cursos.nombre AS nombre,
clases.grupo AS grupo,
asig.id AS id_asignatura,
asig.nombre AS asignatura,
prof.id AS id_profesor,
concat(prof.nombre,' ',prof.apellidos) AS profesor
from
clase_asign
left join clases on clases.id = clase_asign.id_clase
left join cursos on cursos.id = clases.curso
left join asignaturas asig on asig.id = clase_asign.id_asignatura
left join profesores prof on prof.id = clase_asign.id_profesor