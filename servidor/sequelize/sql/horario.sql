/*DROP TABLE IF EXISTS horario;*/

CREATE TABLE IF NOT EXISTS horario (
  idClase INT(11) NOT NULL,
  diaSemana VARCHAR(45) NOT NULL,
  idSesion INT(11) NOT NULL,
  idAsignatura INT(11) NOT NULL,
  idProfesor INT(11) NOT NULL,
  INDEX `fk_horario_clases1_idx` (`idClase` ASC),
  INDEX `fk_horario_profesores1_idx` (`idProfesor` ASC),
  INDEX `fk_horario_sesiones1_idx` (`idSesion` ASC),
  INDEX `fk_horario_asignaturas1_idx` (`idAsignatura` ASC),
  CONSTRAINT `fk_horario_asignaturas1`
    FOREIGN KEY (`idAsignatura`)
    REFERENCES `educon`.`asignaturas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_clases1`
    FOREIGN KEY (`idClase`)
    REFERENCES `educon`.`clases` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_profesores1`
    FOREIGN KEY (`idProfesor`)
    REFERENCES `educon`.`profesores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horario_sesiones1`
    FOREIGN KEY (`idSesion`)
    REFERENCES `educon`.`sesiones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8