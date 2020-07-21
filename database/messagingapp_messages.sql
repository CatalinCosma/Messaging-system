-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: messagingapp
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `senderId` int unsigned NOT NULL,
  `recipientId` int unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,2,'Sanatate','Ce faci?'),(2,1,2,'Salut','Cum stai cu reparatiile?'),(3,2,1,'Buna','Reteta?'),(4,1,2,'',''),(5,1,2,'',''),(6,1,2,'',''),(7,1,2,'Reteta','Cum era reteta pentru crispy?'),(8,2,1,'Nu stiu','Mai Cauta'),(9,2,1,'',''),(10,2,2,'',''),(11,2,2,'cea','gdhdfhdfg'),(12,2,1,'ecagsd','fdgdhgdsfsdf'),(13,2,1,'ceva','ROMANIA'),(14,2,1,'Nu am reusit','trebuie sa mai lucram putin'),(15,1,1,'unirea','casda'),(16,1,2,'dddd','aaa'),(17,1,1,'kkkkk','pppppppp'),(18,1,2,'ceeeeeeeeeeeeeeeeeeeee','undeva departe'),(19,1,2,'mancarea','se are mancarea'),(20,1,2,'zsdadasd','dfgdgdfgdggdfdgdgfdgdg'),(21,2,2,'aasdadasddads','11111111111111111111111111111111111111111111111111'),(22,2,2,'4444444444444444444444444444444444','6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666'),(23,2,1,'DENIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'),(24,2,1,'oooooooooooooooooooooooooooooooooooooo','iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'),(25,19,1,'Sunt Alin','Sunt noul User Alin'),(26,19,2,'Incercam sa vedem','Alin marele mare'),(27,2,19,'Ce faci Alin','unde ai fost astazi?'),(28,1,19,'Televizor','nu vrei un televizor?'),(29,19,1,'1','Undeva departe'),(30,19,1,'1','undeva in zari'),(31,19,2,'2','2');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-07 10:23:10
