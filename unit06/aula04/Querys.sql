SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `new_schema1` ;
USE `new_schema1` ;

-- -----------------------------------------------------
-- Table `new_schema1`.`Cargos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Cargos` (
  `idCargos` INT NOT NULL AUTO_INCREMENT,
  `nomeCargo` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCargos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Enderecos` (
  `idEnderecos` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `CEP` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEnderecos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Equipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Equipes` (
  `idEquipes` INT NOT NULL AUTO_INCREMENT,
  `nomeEquipe` VARCHAR(255) NOT NULL,
  `numeroRecursos` INT NOT NULL,
  PRIMARY KEY (`idEquipes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Recurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Recurso` (
  `idRecurso` INT NOT NULL AUTO_INCREMENT,
  `nomeRecurso` VARCHAR(45) NULL,
  `salario` FLOAT NULL,
  `Cargos_idCargos` INT NOT NULL,
  `Enderecos_idEnderecos` INT NOT NULL,
  `Equipes_idEquipes` INT NOT NULL,
  PRIMARY KEY (`idRecurso`),
  INDEX `fk_Recurso_Cargos_idx` (`Cargos_idCargos` ASC) VISIBLE,
  INDEX `fk_Recurso_Enderecos1_idx` (`Enderecos_idEnderecos` ASC) VISIBLE,
  INDEX `fk_Recurso_Equipes1_idx` (`Equipes_idEquipes` ASC) VISIBLE,
  CONSTRAINT `fk_Recurso_Cargos`
    FOREIGN KEY (`Cargos_idCargos`)
    REFERENCES `new_schema1`.`Cargos` (`idCargos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recurso_Enderecos1`
    FOREIGN KEY (`Enderecos_idEnderecos`)
    REFERENCES `new_schema1`.`Enderecos` (`idEnderecos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recurso_Equipes1`
    FOREIGN KEY (`Equipes_idEquipes`)
    REFERENCES `new_schema1`.`Equipes` (`idEquipes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Telefones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Telefones` (
  `idTelefones` INT NOT NULL AUTO_INCREMENT,
  `tipoContato` VARCHAR(50) NULL,
  `numeroTelefone` VARCHAR(45) NOT NULL,
  `Recurso_idRecurso` INT NOT NULL,
  PRIMARY KEY (`idTelefones`),
  INDEX `fk_Contatos_Recurso1_idx` (`Recurso_idRecurso` ASC) VISIBLE,
  CONSTRAINT `fk_Contatos_Recurso1`
    FOREIGN KEY (`Recurso_idRecurso`)
    REFERENCES `new_schema1`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Ferramentas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Ferramentas` (
  `idFerramentas` INT NOT NULL AUTO_INCREMENT,
  `nomeFerramenta` VARCHAR(255) NOT NULL,
  `versao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idFerramentas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`FerramentaRecurso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`FerramentaRecurso` (
  `idFerramentaRecurso` INT NOT NULL AUTO_INCREMENT,
  `Recurso_idRecurso` INT NOT NULL,
  `Ferramentas_idFerramentas` INT NOT NULL,
  PRIMARY KEY (`idFerramentaRecurso`),
  INDEX `fk_FerramentaRecurso_Recurso1_idx` (`Recurso_idRecurso` ASC) VISIBLE,
  INDEX `fk_FerramentaRecurso_Ferramentas1_idx` (`Ferramentas_idFerramentas` ASC) VISIBLE,
  CONSTRAINT `fk_FerramentaRecurso_Recurso1`
    FOREIGN KEY (`Recurso_idRecurso`)
    REFERENCES `new_schema1`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FerramentaRecurso_Ferramentas1`
    FOREIGN KEY (`Ferramentas_idFerramentas`)
    REFERENCES `new_schema1`.`Ferramentas` (`idFerramentas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Projetos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Projetos` (
  `idProjetos` INT NOT NULL AUTO_INCREMENT,
  `nomeProjeto` VARCHAR(255) NOT NULL,
  `dataInicio` DATE NOT NULL,
  `dataPrevistaTermino` DATE NOT NULL,
  `dataRealTermino` DATE NULL,
  `Equipes_idEquipes` INT NOT NULL,
  `Recurso_idGerente` INT NOT NULL,
  PRIMARY KEY (`idProjetos`),
  INDEX `fk_Projetos_Equipes1_idx` (`Equipes_idEquipes` ASC) VISIBLE,
  INDEX `fk_Projetos_Recurso1_idx` (`Recurso_idGerente` ASC) VISIBLE,
  CONSTRAINT `fk_Projetos_Equipes1`
    FOREIGN KEY (`Equipes_idEquipes`)
    REFERENCES `new_schema1`.`Equipes` (`idEquipes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projetos_Recurso1`
    FOREIGN KEY (`Recurso_idGerente`)
    REFERENCES `new_schema1`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Atividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Atividades` (
  `idAtividades` INT NOT NULL AUTO_INCREMENT,
  `nomeAtividade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAtividades`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Projetos_has_Atividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Projetos_has_Atividades` (
  `idProjetosAtividades` INT NOT NULL AUTO_INCREMENT,
  `Projetos_idProjetos` INT NOT NULL,
  `Atividades_idAtividades` INT NOT NULL,
  PRIMARY KEY (`idProjetosAtividades`, `Projetos_idProjetos`, `Atividades_idAtividades`),
  INDEX `fk_Projetos_has_Atividades_Atividades1_idx` (`Atividades_idAtividades` ASC) VISIBLE,
  INDEX `fk_Projetos_has_Atividades_Projetos1_idx` (`Projetos_idProjetos` ASC) VISIBLE,
  CONSTRAINT `fk_Projetos_has_Atividades_Projetos1`
    FOREIGN KEY (`Projetos_idProjetos`)
    REFERENCES `new_schema1`.`Projetos` (`idProjetos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Projetos_has_Atividades_Atividades1`
    FOREIGN KEY (`Atividades_idAtividades`)
    REFERENCES `new_schema1`.`Atividades` (`idAtividades`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`Tarefas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`Tarefas` (
  `idTarefas` INT NOT NULL AUTO_INCREMENT,
  `descricaoTarefa` TEXT NOT NULL,
  `Atividades_idAtividades` INT NOT NULL,
  PRIMARY KEY (`idTarefas`),
  INDEX `fk_Tarefas_Atividades1_idx` (`Atividades_idAtividades` ASC) VISIBLE,
  CONSTRAINT `fk_Tarefas_Atividades1`
    FOREIGN KEY (`Atividades_idAtividades`)
    REFERENCES `new_schema1`.`Atividades` (`idAtividades`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `new_schema1`.`historicoSalario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `new_schema1`.`historicoSalario` (
  `idhistoricoSalario` INT NOT NULL AUTO_INCREMENT,
  `dataAumento` DATE NOT NULL,
  `valorSalario` DECIMAL(10,2) NULL,
  `Recurso_idRecurso` INT NOT NULL,
  PRIMARY KEY (`idhistoricoSalario`),
  INDEX `fk_historicoSalario_Recurso1_idx` (`Recurso_idRecurso` ASC) VISIBLE,
  CONSTRAINT `fk_historicoSalario_Recurso1`
    FOREIGN KEY (`Recurso_idRecurso`)
    REFERENCES `new_schema1`.`Recurso` (`idRecurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


ALTER TABLE `cargos` ADD COLUMN `descricao` VARCHAR(255) NULL AFTER `tituloCargo`;
ALTER TABLE `cargos` MODIFY COLUMN `nomeCargo` VARCHAR(155) NOT NULL;
ALTER TABLE `cargos` CHANGE COLUMN `nomeCargo` `tituloCargo` VARCHAR(155) NOT NULL;
ALTER TABLE `cargos` DROP COLUMN `descricao`;
ALTER TABLE `recurso` ADD CONSTRAINT `fk_Cargos_idCargos`
	FOREIGN KEY (Cargos_idCargos) REFERENCES `cargos` (idCargos)
    ON DELETE CASCADE;
CREATE INDEX idx_tituloCargo ON Cargos(tituloCargo);
ALTER TABLE `cargos` RENAME TO `funcoes`;
ALTER TABLE `enderecos` ADD PRIMARY KEY (`idEnderecos`);
ALTER TABLE `recursos` DROP FOREIGN KEY idCargo;
ALTER TABLE `recursos` DROP COLUMN idCargo;