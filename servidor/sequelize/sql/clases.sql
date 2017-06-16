/*DROP TABLE IF EXISTS clases;*/

CREATE TABLE IF NOT EXISTS clases (
  id INT(11) NOT NULL AUTO_INCREMENT,
  grupo VARCHAR(45) NOT NULL,
  tutor INT(11) NULL DEFAULT NULL,
  curso INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clases_profesores1_idx` (`tutor` ASC),
  INDEX `fk_clases_cursos1_idx` (`curso` ASC),
  CONSTRAINT `fk_clases_cursos1`
    FOREIGN KEY (`curso`)
    REFERENCES `educon`.`cursos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clases_profesores1`
    FOREIGN KEY (`tutor`)
    REFERENCES `educon`.`profesores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8