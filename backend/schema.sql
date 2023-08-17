-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema task management
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema task management
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `task` DEFAULT CHARACTER SET utf8mb3 ;
USE `task management` ;

-- -----------------------------------------------------
-- Table `task management`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `task management`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `users_id` INT NOT NULL,
  `imageUrl` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tasks_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_tasks_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `task`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
