/*DROP TABLE IF EXISTS notas;*/

CREATE TABLE IF NOT EXISTS notas (
  id` INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NULL DEFAULT NULL,
  alumno INT(11) NOT NULL,
  asignatura INT(11) NOT NULL,
  nota FLOAT NULL DEFAULT NULL,
  observaciones VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Notas_alumnos1_idx` (`alumno` ASC),
  INDEX `fk_Notas_asignaturas1_idx` (`asignatura` ASC),
  CONSTRAINT `fk_Notas_alumnos1`
    FOREIGN KEY (`alumno`)
    REFERENCES `educon`.`alumnos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Notas_asignaturas1`
    FOREIGN KEY (`asignatura`)
    REFERENCES `educon`.`asignaturas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8