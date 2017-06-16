/*DROP TABLE IF EXISTS eventos;*/

CREATE TABLE IF NOT EXISTS eventos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  alumno INT(11) NOT NULL,
  fecha DATE NOT NULL,
  sesion INT(11) NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_eventos_sesiones1_idx` (`sesion` ASC),
  INDEX `fk_eventos_alumnos1_idx` (`alumno` ASC),
  CONSTRAINT `fk_eventos_alumnos1`
    FOREIGN KEY (`alumno`)
    REFERENCES `educon`.`alumnos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_eventos_sesiones1`
    FOREIGN KEY (`sesion`)
    REFERENCES `educon`.`sesiones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8