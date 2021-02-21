/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.3.20-MariaDB : Database - no_pain_no_gains
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`no_pain_no_gains` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `no_pain_no_gains`;

/*Table structure for table `tbl_ciudad` */

DROP TABLE IF EXISTS `tbl_ciudad`;

CREATE TABLE `tbl_ciudad` (
  `id_ciudad` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_ciudad` varchar(50) NOT NULL,
  PRIMARY KEY (`id_ciudad`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_ciudad` */

insert  into `tbl_ciudad`(`id_ciudad`,`descripcion_ciudad`) values 
(1,'Cali'),
(2,'Medellin'),
(3,'Bogota'),
(4,'Cucuta'),
(5,'Tolima'),
(6,'Cucuta'),
(7,'Cartagena'),
(8,'Santa Marta'),
(9,'Ciudad Bolivar');

/*Table structure for table `tbl_cliente_sede` */

DROP TABLE IF EXISTS `tbl_cliente_sede`;

CREATE TABLE `tbl_cliente_sede` (
  `id_cliente_sede` int(11) NOT NULL AUTO_INCREMENT,
  `id_sede` int(11) NOT NULL,
  `cedula_cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente_sede`),
  KEY `id_sede` (`id_sede`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_cliente_sede` */

insert  into `tbl_cliente_sede`(`id_cliente_sede`,`id_sede`,`cedula_cliente`) values 
(1,4,1889905),
(2,3,1889906),
(3,1,1889909),
(4,1,18899089),
(5,1,111111),
(6,6,1254366),
(7,7,2222222),
(8,9,775533),
(9,10,125533);

/*Table structure for table `tbl_rol` */

DROP TABLE IF EXISTS `tbl_rol`;

CREATE TABLE `tbl_rol` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_rol` varchar(30) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_rol` */

insert  into `tbl_rol`(`id_rol`,`descripcion_rol`) values 
(1,'cliente'),
(2,'admin');

/*Table structure for table `tbl_sede` */

DROP TABLE IF EXISTS `tbl_sede`;

CREATE TABLE `tbl_sede` (
  `id_sede` int(11) NOT NULL AUTO_INCREMENT,
  `id_ciudad` int(11) NOT NULL,
  `nit` varchar(30) NOT NULL,
  `descripcion_sede` varchar(50) NOT NULL,
  `direccion` varchar(400) NOT NULL,
  PRIMARY KEY (`id_sede`),
  KEY `id_ciudad` (`id_ciudad`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_sede` */

insert  into `tbl_sede`(`id_sede`,`id_ciudad`,`nit`,`descripcion_sede`,`direccion`) values 
(6,1,'J-1234564','no-pain-no-gain Cali','tv 45b#86-40'),
(1,2,'J-1234564','no-pain-no-gain Medellin','tv 45b#86-40'),
(2,3,'J-8','no-pain-no-gain BOGOTA','tv 45 # 56- 67'),
(3,4,'J-1234567','no-pain-no-gain CUCUTA','tv 45 # 56- 68'),
(7,2,'J-57699','NO-PAIN-NO-GAIN La Floresta','La Floresta carrera 22#45-55'),
(8,2,'J-57677','NO-PAIN-NO-GAIN La Florida','La Florida carrera 22#45-55'),
(9,8,'J-5533','NO-PAIN-NO-GAIN Santa Marta','Santa Marta carrera 22#45-55'),
(10,9,'J-5769945','NO-PAIN-NO-GAIN Ciudad Bolivar','Ciudad carrera 22#45-55');

/*Table structure for table `tbl_usuario` */

DROP TABLE IF EXISTS `tbl_usuario`;

CREATE TABLE `tbl_usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `id_rol` int(11) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `cedula` int(11) NOT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `id_rol` (`id_rol`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_usuario` */

insert  into `tbl_usuario`(`id_usuario`,`id_rol`,`correo`,`nombre`,`apellido`,`cedula`,`usuario`,`password`) values 
(17,1,'pepe@gmail.com','Andrés','Guzman',1234567,NULL,NULL),
(2,2,'admin@gmail.com','Pedro','Perez',1160988,'admin','admin'),
(4,2,'antonio@gmail.com','antonio','calixto',1889900,'calixto','calixto'),
(5,2,'carlos@gmail.com','carlos','villada',1889901,'carlos','carlos'),
(6,2,'carlo@gmail.com','carlo','villada',1889902,'carlo','carlos'),
(7,2,'carli@gmail.com','carli','villada',1889903,'carli','carlos'),
(12,1,'made@gmail.com','Madelen','villada',1889905,'made','made'),
(13,1,'madelen@gmail.com','Madelen','yings',1889906,'madelen','made'),
(14,1,'franco@gmail.com','franco','villada',1889909,'franco','franco'),
(15,1,'francos@gmail.com','francos','villadas',18899089,NULL,NULL),
(16,2,'jhon@gmail.com','jhon','valderrama',19899089,'jhon','jhon'),
(18,1,'leotube@gmail.com','Leo Tube','Blanco',678532,NULL,NULL),
(19,1,'simon@gmail.com','bolivar','simon',16285653,NULL,NULL),
(20,2,'sucre@gmail.com','sucre','velazquez',16286654,NULL,NULL),
(21,1,'antgomez@gmail.com','Antonio','gomez',111111,NULL,NULL),
(22,1,'alcira@gmail.com','maria','alcira',1254366,NULL,NULL),
(23,1,'fernando@gmail.com','Fernando','Blanco',2222222,NULL,NULL),
(24,1,'verdus@gmail.com','Verdus','Marcos',775533,NULL,NULL),
(25,1,'pedropablo@gmail.com','Pedro','Perez',125533,NULL,NULL),
(26,2,'alberto@gmail.com','Alberto','perez',987632,'alberto','alberto');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
