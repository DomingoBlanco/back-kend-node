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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_ciudad` */

insert  into `tbl_ciudad`(`id_ciudad`,`descripcion_ciudad`) values 
(1,'Cali'),
(2,'Medellin'),
(3,'Bogota'),
(4,'Cucuta');

/*Table structure for table `tbl_cliente_sede` */

DROP TABLE IF EXISTS `tbl_cliente_sede`;

CREATE TABLE `tbl_cliente_sede` (
  `id_cliente_sede` int(11) NOT NULL AUTO_INCREMENT,
  `id_sede` int(11) NOT NULL,
  `cedula_cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente_sede`),
  KEY `id_sede` (`id_sede`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_cliente_sede` */

insert  into `tbl_cliente_sede`(`id_cliente_sede`,`id_sede`,`cedula_cliente`) values 
(1,4,1889905),
(2,3,1889906),
(3,1,1889909),
(4,1,18899089);

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
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_sede` */

insert  into `tbl_sede`(`id_sede`,`id_ciudad`,`nit`,`descripcion_sede`,`direccion`) values 
(6,1,'J-1234564','no-pain-no-gain Cali','tv 45b#86-40'),
(1,2,'J-1234564','no-pain-no-gain Medellin','tv 45b#86-40'),
(2,1,'J-8','no-pain-no-gain Cali','tv 45 # 56- 67'),
(3,1,'J-1234567','no-pain-no-gain Cali','tv 45 # 56- 68');

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
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_usuario` */

insert  into `tbl_usuario`(`id_usuario`,`id_rol`,`correo`,`nombre`,`apellido`,`cedula`,`usuario`,`password`) values 
(1,1,'domingoa.blanco@gmail.com','Domingo','Blanco',16285651,'1','3'),
(2,2,'admin@gmail.com','Pedro','Perez',1160988,'admin','admin'),
(4,2,'antonio@gmail.com','antonio','calixto',1889900,'calixto','calixto'),
(5,2,'carlos@gmail.com','carlos','villada',1889901,'carlos','carlos'),
(6,2,'carlo@gmail.com','carlo','villada',1889902,'carlo','carlos'),
(7,2,'carli@gmail.com','carli','villada',1889903,'carli','carlos'),
(12,1,'made@gmail.com','Madelen','villada',1889905,'made','made'),
(13,1,'madelen@gmail.com','Madelen','yings',1889906,'madelen','made'),
(14,1,'franco@gmail.com','franco','villada',1889909,'franco','franco'),
(15,1,'francos@gmail.com','francos','villadas',18899089,NULL,NULL),
(16,2,'jhon@gmail.com','jhon','valderrama',19899089,'jhon','jhon');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
