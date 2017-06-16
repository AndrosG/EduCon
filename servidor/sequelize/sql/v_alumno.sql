CREATE VIEW v_alumno AS
    SELECT 
        alu.id AS id,
        alu.nombre AS nombre,
        alu.apellidos AS apellidos,
        alu.telefono AS telefono,
        alu.email AS email,
        alu.contra AS contra,
        curso.nombre AS curso,
        clase.id AS id_clase,
        clase.grupo AS grupo
    FROM
        alumnos alu
        LEFT JOIN clases clase ON clase.id = alu.clase
        LEFT JOIN cursos curso ON curso.id = clase.curso