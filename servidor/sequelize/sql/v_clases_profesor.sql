CREATE VIEW v_clases_profesor AS
SELECT
prof.id AS id_profesor,
clase.id AS id_clase,
curso.nombre AS curso,
clase.grupo AS grupo
FROM
profesores prof
left join clase_asign on clase_asign.id_profesor = prof.id
left join clases clase on clase.id = clase_asign.id_clase
left join cursos curso on curso.id = clase.curso