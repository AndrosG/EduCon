/*DROP TABLE IF EXISTS profesores;*/

CREATE TABLE IF NOT EXISTS profesores (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  apellidos VARCHAR(45) NOT NULL,
  telefono INT(11) NOT NULL,
  email VARCHAR(45) NULL DEFAULT NULL,
  departamento INT(11) NULL DEFAULT NULL,
  usuario VARCHAR(45) NULL DEFAULT NULL,
  contra VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC),
  INDEX `fk_Profesores_Departamentos1_idx` (`departamento` ASC),
  CONSTRAINT `fk_Profesores_Departamentos1`
    FOREIGN KEY (`departamento`)
    REFERENCES `educon`.`departamentos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8