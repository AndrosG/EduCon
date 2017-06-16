/*DROP TABLE IF EXISTS departamentos;*/

CREATE TABLE IF NOT EXISTS departamentos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  jefe_dep INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Departamentos_Profesores1_idx` (`jefe_dep` ASC),
  CONSTRAINT `fk_Departamentos_Profesores1`
    FOREIGN KEY (`jefe_dep`)
    REFERENCES `educon`.`profesores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8