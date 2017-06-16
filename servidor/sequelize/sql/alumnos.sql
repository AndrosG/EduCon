/*DROP TABLE IF EXISTS alumnos;*/

CREATE TABLE IF NOT EXISTS alumnos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  apellidos VARCHAR(45) NOT NULL,
  telefono INT(11) NULL DEFAULT NULL,
  email VARCHAR(45) NULL DEFAULT NULL,
  contra VARCHAR(45) NULL DEFAULT NULL,
  clase INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_alumnos_clases1_idx` (`clase` ASC),
  CONSTRAINT `fk_alumnos_clases1`
    FOREIGN KEY (`clase`)
    REFERENCES `educon`.`clases` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8