-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: k7d206.p.ssafy.io    Database: greenearth
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `children`
--

DROP TABLE IF EXISTS `children`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `children` (
  `child_id` int NOT NULL AUTO_INCREMENT,
  `avatar` int NOT NULL,
  `birthday` date DEFAULT NULL,
  `cleared_mission` int NOT NULL,
  `earth_level` int NOT NULL,
  `gender` varchar(25) DEFAULT NULL,
  `mileage` int NOT NULL,
  `nickname` varchar(25) DEFAULT NULL,
  `password` text,
  `real_name` varchar(25) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`child_id`),
  KEY `FK80yjq0eid40qils83jpgpo6t6` (`parent_id`),
  CONSTRAINT `FK80yjq0eid40qils83jpgpo6t6` FOREIGN KEY (`parent_id`) REFERENCES `parents` (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `children`
--

LOCK TABLES `children` WRITE;
/*!40000 ALTER TABLE `children` DISABLE KEYS */;
INSERT INTO `children` VALUES (5,1,'2022-11-14',0,8,'FEMALE',0,'child5','$2a$10$V95QXiE9SrHDlY2waBla5OAn/IeEOViDjYqA1BVekuxan7VWKHtE6','아이유','ROLE_CHILD',1),(8,18,'1989-12-31',4,3,'MALE',68,'테스트별명맨','$2a$10$TzKcEkjItVdVnoEOVU5O4eyHSB2jZrtNnC3.VeMg2h/l2cCOOznPW','테스트맨','ROLE_CHILD',4),(9,13,'2010-11-23',0,1,'MALE',0,'gogwang','$2a$10$Jl5OiyrJZdE76/8VGCsu3OBew/S.Dh6x3ZT2POqycAGX5c5LYz1ie','고광','ROLE_CHILD',5),(10,12,'2022-11-15',4,2,'MALE',38,'tjrgus1','$2a$10$.h9R8ZNexRVjK8YW6tbqAO/r5zYpabO0lixjjS2RdhKhNxJkByNtq','홍석현','ROLE_CHILD',7),(11,19,'2022-11-17',0,1,'MALE',0,'지은지은','$2a$10$zhMYif6022drJQdCv73lGOrvZ/..RBWUJ5lHjZ1Jb8tCrUjvxnXJ.','박지은','ROLE_CHILD',8),(12,18,'2022-11-01',0,1,'MALE',0,'경열경열','$2a$10$F5UdQBQA2YUu39opGibhQOvXANV7rw9gaGgANT3C5wgpEQONqUXk.','박경열','ROLE_CHILD',8),(13,20,'2022-11-18',0,4,'MALE',0,'child4','$2a$10$a1NPcq7GTUfMtbCsnahON.xHQC/zORynO2LhO7jRUjLpLrQXceUvO','4','ROLE_CHILD',1),(14,3,'2022-11-18',0,6,'FEMALE',0,'child6','$2a$10$DPJGMUc9B5.2p.oxLacujekODSWIyNnoMCMJ1qo4FxquR9fuybvnW','6','ROLE_CHILD',1),(15,11,'2022-11-18',0,7,'MALE',0,'child7','$2a$10$y.yJpSJd.qSUaxiK4hmHpeNHXPAbS1r9pHMHZ7E2kt895whxdfrHy','7','ROLE_CHILD',1),(16,20,'2022-11-18',0,1,'MALE',0,'jjjj','$2a$10$PzXgL0.CPmIiIPY8sxf7EeyvOeyLCxfugLHkwsuWqA.xhiqERUttW','jjj','ROLE_CHILD',6),(19,12,'2022-11-08',0,1,'MALE',0,'테스트별명맨17','$2a$10$adBhMjxsZjvtPJYBwUrxteQjCaPY6kG2I0rkU3on3q1zldKYSB3IO','테스트맨2','ROLE_CHILD',4),(20,15,'1997-06-25',0,1,'MALE',0,'socialable','$2a$10$iRJa1jwbb3N4kAloEJPPGucBN.KaMbnZxlCZA7gJu7L/ywSeh3UBq','나는이동욱','ROLE_CHILD',9),(21,19,'2014-04-22',0,1,'MALE',0,'ssafy1234','$2a$10$t3MERTG4gjgBIaVoyIqzju/aupYGHhePjnzxbysWeTK9FF3hleeO6','지명','ROLE_CHILD',3),(22,4,'2015-11-24',0,1,'FEMALE',0,'ssafy4321','$2a$10$/9GCsOccYOpfNl5g1b0R4e/v0gEH7f.ADQsdJPVYwa37ZRBJzNwF.','지은','ROLE_CHILD',3);
/*!40000 ALTER TABLE `children` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `green_earth`
--

DROP TABLE IF EXISTS `green_earth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `green_earth` (
  `green_earth_id` int NOT NULL AUTO_INCREMENT,
  `mileage_condition` int NOT NULL,
  PRIMARY KEY (`green_earth_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `green_earth`
--

LOCK TABLES `green_earth` WRITE;
/*!40000 ALTER TABLE `green_earth` DISABLE KEYS */;
INSERT INTO `green_earth` VALUES (1,0),(2,15),(3,30),(4,100),(5,170),(6,300),(7,450),(8,650);
/*!40000 ALTER TABLE `green_earth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `green_earth_logs`
--

DROP TABLE IF EXISTS `green_earth_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `green_earth_logs` (
  `child_id` int NOT NULL,
  `green_earth_id` int NOT NULL,
  `cleared_at` datetime DEFAULT NULL,
  PRIMARY KEY (`child_id`,`green_earth_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `green_earth_logs`
--

LOCK TABLES `green_earth_logs` WRITE;
/*!40000 ALTER TABLE `green_earth_logs` DISABLE KEYS */;
INSERT INTO `green_earth_logs` VALUES (8,2,'2022-11-18 16:16:43'),(8,3,'2022-11-19 15:32:24'),(10,2,'2022-11-17 10:37:46');
/*!40000 ALTER TABLE `green_earth_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mission_logs`
--

DROP TABLE IF EXISTS `mission_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mission_logs` (
  `log_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `cleared_at` datetime DEFAULT NULL,
  `is_permitted` bit(1) NOT NULL,
  `parent_nickname` varchar(25) DEFAULT NULL,
  `child_id` int DEFAULT NULL,
  `mission_id` int DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `FKhq2stl6be48g5imb40eorh3oq` (`child_id`),
  KEY `FK6agdssfw8r0luav8qbcts3wc9` (`mission_id`),
  CONSTRAINT `FK6agdssfw8r0luav8qbcts3wc9` FOREIGN KEY (`mission_id`) REFERENCES `missions` (`mission_id`),
  CONSTRAINT `FKhq2stl6be48g5imb40eorh3oq` FOREIGN KEY (`child_id`) REFERENCES `children` (`child_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mission_logs`
--

LOCK TABLES `mission_logs` WRITE;
/*!40000 ALTER TABLE `mission_logs` DISABLE KEYS */;
INSERT INTO `mission_logs` VALUES (21,'2022-11-15 09:31:33','2022-11-15 09:45:14','2022-11-15 09:45:14',_binary '\0','강지명',5,2),(22,'2022-11-15 10:46:29','2022-11-15 10:47:59','2022-11-15 10:47:35',_binary '','박경열',8,6),(23,'2022-11-15 10:46:32','2022-11-15 10:48:01','2022-11-15 10:47:40',_binary '','박경열',8,1),(34,'2022-11-17 10:00:23','2022-11-17 10:26:41','2022-11-17 10:26:41',_binary '\0','강지명',5,1),(35,'2022-11-17 10:20:56','2022-11-17 10:20:56',NULL,_binary '\0','강지명',5,2),(36,'2022-11-17 10:32:51','2022-11-17 10:37:44','2022-11-17 10:36:41',_binary '','석현',10,1),(37,'2022-11-17 10:32:57','2022-11-17 10:37:46','2022-11-17 10:36:30',_binary '','석현',10,4),(38,'2022-11-17 10:43:35','2022-11-17 10:44:03','2022-11-17 10:43:50',_binary '','석현',10,6),(39,'2022-11-18 17:46:55','2022-11-18 17:47:58','2022-11-18 17:47:58',_binary '\0','강지명',5,3),(40,'2022-11-18 17:47:03','2022-11-18 17:47:03',NULL,_binary '\0','강지명',5,2),(41,'2022-11-18 17:47:08','2022-11-18 17:47:08',NULL,_binary '\0','강지명',5,4),(44,'2022-11-19 15:27:20','2022-11-19 15:27:54','2022-11-19 15:27:38',_binary '','석현',10,3),(45,'2022-11-19 15:31:13','2022-11-19 15:32:24','2022-11-19 15:32:16',_binary '','박경열',8,10),(46,'2022-11-19 15:36:13','2022-11-19 15:36:13',NULL,_binary '\0','강지명',5,1),(47,'2022-11-19 15:36:16','2022-11-19 15:36:16',NULL,_binary '\0','강지명',5,3),(48,'2022-11-19 15:36:20','2022-11-19 15:40:17','2022-11-19 15:40:17',_binary '\0','강지명',5,9),(49,'2022-11-19 16:57:59','2022-11-19 17:31:49','2022-11-19 17:05:58',_binary '','박경열',8,3),(50,'2022-11-19 17:32:02','2022-11-19 17:32:02',NULL,_binary '\0','박경열',8,2),(51,'2022-11-19 17:35:52','2022-11-19 17:36:41','2022-11-19 17:36:41',_binary '\0','박경열',19,5),(52,'2022-11-20 03:27:39','2022-11-20 03:27:39',NULL,_binary '\0','이동욱',20,1);
/*!40000 ALTER TABLE `mission_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `missions`
--

DROP TABLE IF EXISTS `missions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `missions` (
  `mission_id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(1024) DEFAULT NULL,
  `mileage` int NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`mission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `missions`
--

LOCK TABLES `missions` WRITE;
/*!40000 ALTER TABLE `missions` DISABLE KEYS */;
INSERT INTO `missions` VALUES (1,'매년 전 세계에서 나오는 음식 쓰레기는 25억톤입니다. 이 음식물 쓰레기에서는 온실가스가 배출되고, 온실가스는 기후변화의 주범이 되고 있습니다. 이러한 기후 변화로 북극곰이 살 곳을 잃고 있습니다. 북극곰에게 지구온난화는 바로 삶의 터전의 문제입니다. 북금곰들은 삶의 터전을 잃고 먹이를 찾을 수 없는 치명적인 위기를 맞게 됩니다. 지구온난화로 바다얼음이 사라지면서 북극곰(Polar Bear) 개체수는 지난 10년 새 절반 가까이 급감했습니다. 우리 집에서 나오는 음식물 쓰레기를 줄여서 온실가스 배출 줄이기에 동참해주세요.',8,'음식 남기지 않기'),(2,'손을 씻은 후에 물을 몇 번 털어낸 다음 종이 타월이나 핸드 드라이어 대신 개인 손수건을 사용하면 연간 1인당 26㎏의 이산화탄소를 줄일 수 있습니다. 탄소 배출량이 현재 수준으로 유지된다면 2050년에는 황제펭귄 서식지의 70%가 사라지고, 2100년에는 황제펭귄의 98%가 서식지를 잃어 멸종에 이를 수 있어요. 종이타월, 핸드드라이어 대신 개인 손수건 사용하며 온실가스 배출 줄이기에 동참해주세요.',5,'종이타월 대신 개인 손수건 사용하기'),(3,'방글라데시와 인도의 습지에는 현재 약 5,000 마리의 벵갈 호랑이가 살고 있습니다. 그러나 기후변화로 인한 해수면 상승으로 인해 벵갈호랑이의 서식처가 물에 잠길 위험에 처했습니다. 4인 가족이 하루 3회 양치컵을 사용하면 물을 틀어 놓을 때보다 연간 온실가스 약 12.6kg을 줄일 수 있으며 이는 30년생 소나무 1.3그루를 심는 효과와 같습니다. 우리나라 전체 2089만 1,000가구의 10%만 동참해도 연간 온실가스 약 2만 6000톤을 감축하게 돼 30년생 소나무 289만 그루를 심는 효과가 됩니다. 양치컵 사용하기를 통해 물낭비를 줄이고 벵갈호랑이의 삶의 터전을 지켜주세요.',5,'양치컵 사용하기'),(4,'대구시에 따르면, 시에서 소비되는 1회용 컵은 연간 8억개 정도로, 연간 참나무 30년생 340그루의 소중한 산림이 사라지고 있으며, 시민들의 자발적 참여로 1회용품을 30% 절감하면 100여 그루의 참나무를 식재하는 효과가 나타납니다. 또 온실가스 배출량 6천720톤의 감축 효과가 있습니다.영화 <쿵푸팬더>의 주인공, 자이언트 판다도 기후변화의 위협에서 자유롭지 못합니다. 생존에 필요한 영양 뿐 아니라 서식처를 제공하는 대나무 숲이 기후변화로 인해 빠른 속도로 없어지고 있기 때문입니다.  물통 사용을 통해 일회용 컵 사용을 줄이고 판다의 삶의 터전인 대나무 숲을 지켜주세요.',15,'물통(텀블러)사용하기'),(5,'지구온난화는 기후변화를 만듭니다. 지구 기온이 1°C정도 올랐는데 자연재해, 해수면 상승, 생태계 파괴 등 이미 많은 피해가 나타났어요. 전 세계는 기후변화의 피해를 줄이기 위해 기온 상승을 1.5°C 이내로 막자고 약속했어요! 기후변화를 막는 우리의 실천, 바로 기후행동입니다. 바닷속 플라스틱으로 괴로운 바다거북은 지구온난화의 피해자이기도 합니다. 바다거북은 해변가 모래 속에 알을 낳습니다. 모래에 수분기가 많고 시원할수록 수컷이 많이 부화하고, 모래가 따뜻하고 건조할수록 암컷이 많이 부화합니다. 지구 온도 상승으로 인해 이제 수컷 바다거북은 거의 태어나지 않습니다. 지난 20년 동안 태어난 바다거북의 99%가 암컷이었습니다. 사용하지 않는 방 전등 소등을 실천하며 바다거북의 삶을 지켜주세요.',20,'사용하지 않는 방 전등 소등'),(6,'탄소배출로 인한 지구온난화의 영향으로 치타는 멸종위기에 처했어요. 한 가구에서 대기전력을 줄이기 위한 노력을 한다면 연간 82kg 정도의 탄소배출을 줄일 수 있습니다. 106만 세대의 대구시민이 실천한다면 연간 약 8만 7000톤의 온실가스를 감축할 수 있다. 대구시 면적의 8%에 해당하는 30년생 소나무 숲이 연간 흡수하는 탄소량과 같습니다. 사용하지 않는 콘센트를 뽑고 대기전력을 줄여 탄소배출 줄이기에 동참해주세요',10,'사용하지 않는 콘센트 뽑기'),(7,'아프리카 강과 호수, 습지에 사는 하마는 기후위기로 찾아오는 가뭄, 기온상승으로 인해 위기에 빠졌어요. 하마가 출현했던 36개 국가 중 3개국에서는 최근 하마가 멸종했다고 보고됐으며, 20개국에서 개체수가 감소하고 7개국에는 개체수에 관한 정보조차 없어요. 길에 버려진 쓰레기는 강이나 바다로 흘러들어가 환경오염의 주범이 됩니다. 길에서 쓰레기를 주워서 환경 지키기에 동참해주세요',10,'길에 버려진 쓰레기 줍기'),(8,'대서양, 태평양, 인도양을 누비는 장수거북은 모래 온도가 상승함에 따라 생존 위협을 겪고 있어요. 바다거북은 알 주변 기온이 일정 온도를 넘으면 수컷, 낮으면 암컷으로 태어나요. 만약 지구기온이 점점 상승해 모래가 뜨거워지면 암컷만 태어나게 되고 멸종을 가속하게 돼요. 우리가 심은 나무는 일생을 통해 온실가스를 흡수하거나 배출을 줄이는 역할을 하면서 지구온난화에 대한 기상 변화도 조절해주는 역할을 합니다. 산불예방 하는 방법을  알아보고  소중한 나무 지키기에 동참해주세요 ',5,'산불을 예방하는 방법 알아보기'),(9,'지구 온난화로 겨울은 늦어지고 봄과 여름은 점점 빨라지고 있습니다. 눈덧신토끼는 봄부터 가을까진 갈색의 털을, 겨울엔 털갈이를 해 흰털로 위장합니다. 그러나 털이 미처 갈색으로 바뀌기 전에 봄이 일찍 찾아오게 되면서 멸종위기에 처하게 되었습니다. 기후 변화라는 위기에 처한 현실에서 개개인의 작은 노력도 모이면 지구를 지키는 데에 큰 도움이 될 수 있습니다. 가장 먼저, 생활 속에서 발생하는 이산화탄소를 줄이기 위해 집에 작은 화분을 들여보는 것은 어떨까요?',25,'내 반려식물 관리하기'),(10,'추운 지방에서 사는 순록의 몸에는 땀샘(땀을 분비하는 기관)이 없어 날씨가 따뜻해지면 체온을 조절하기가 어려워요. 또 순록은 눈을 헤치고 이끼를 뜯어먹고 사는데, 기온이 올라 눈이 아닌 비가 내리면서 땅이 꽝꽝 얼어붙어서 먹이를 구하지 못한 순록이 굶어 죽고 있는 것이다. 인터넷 사용 1GB당 탄소 28~63gCO₂e가 배출됩니다. CO₂e는 이산화탄소와 메탄, 이산화질소 등 여러 온실가스를 탄소배출량으로 환산한 \'탄소환산량\'을 뜻합니다. 방대한 양의 데이터를 저장ㆍ가공하는 인터넷의 ‘뇌’ 데이터센터 가동에 어마어마한 전력이 듭니다. 특히 데이터 저장보다는 이를 실시간으로 전달하는 스트리밍 서비스의 영향이 더 큽니다. 스트리밍 시간을 줄여서 환경보호에 동참해주세요',15,'유튜브 시청 줄이기');
/*!40000 ALTER TABLE `missions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parents` (
  `parent_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `nickname` varchar(25) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parents`
--

LOCK TABLES `parents` WRITE;
/*!40000 ALTER TABLE `parents` DISABLE KEYS */;
INSERT INTO `parents` VALUES (1,'rainbow709@nate.com','강지명','ROLE_PARENT'),(3,'ckstjr@kakao.com','박찬석','ROLE_PARENT'),(4,'hrq789@naver.com','박경열','ROLE_PARENT'),(5,'gogwang123@gmail.com','고광','ROLE_PARENT'),(6,'jongil512@naver.com','종일','ROLE_PARENT'),(7,'mchong1996@hanmail.net','석현','ROLE_PARENT'),(8,'skysun704@gmail.com','박지은','ROLE_PARENT'),(9,'zmstjftk@nate.com','이동욱','ROLE_PARENT');
/*!40000 ALTER TABLE `parents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refresh_token`
--

DROP TABLE IF EXISTS `refresh_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_token` (
  `subject_id` int NOT NULL,
  `subject_role` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`subject_id`,`subject_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_token`
--

LOCK TABLES `refresh_token` WRITE;
/*!40000 ALTER TABLE `refresh_token` DISABLE KEYS */;
INSERT INTO `refresh_token` VALUES (5,'ROLE_CHILD','2022-11-19 15:49:35','2022-11-19 15:49:35','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk0NDUzNzR9.Jdd8g7xX-ITcO7bWUSMNLZYMNP1azgndVZApdki6jps'),(6,'ROLE_PARENT','2022-11-18 17:31:37','2022-11-18 17:31:37','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2NjkzNjUwOTd9.FPxLtGaYiiVRva5OvUZ0kQ5ZdZcREeiH-gotpIjAxkU'),(7,'ROLE_PARENT','2022-11-20 02:37:29','2022-11-20 02:37:29','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk0ODQyNDh9.9doNs7ml86fR30wLHi42nAVseUBEi1MtV5YOSB2ooXE'),(8,'ROLE_CHILD','2022-11-19 16:57:35','2022-11-19 16:57:35','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk0NDk0NTR9.dJyG-yjr9IFC-BXYZWwQPmwwjHlY58q_hTpFBf5UyTI'),(8,'ROLE_PARENT','2022-11-20 16:41:08','2022-11-20 16:41:08','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk1MzQ4Njh9.sx7hP5FMmu8tsURRNOptLmTa4ny-lk-A9t-5-Dbh598'),(9,'ROLE_PARENT','2022-11-20 18:00:04','2022-11-20 18:00:04','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk1Mzk2MDN9.zRrJ8OR6Q3nZ2bWVWWndVqCXNXB666GyOIOa3J1Mhb8'),(10,'ROLE_CHILD','2022-11-20 18:45:15','2022-11-20 18:45:15','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk1NDIzMTR9.XaJNyF1L4WQzWRqB3CH7DNYagpfaRow6rBnrpatqPYI'),(11,'ROLE_CHILD','2022-11-20 20:37:36','2022-11-20 20:37:36','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk1NDkwNTV9.ZparkWFTlLS3P7RktHiBZ5FGCE60DbczFSt1oWM4IbU'),(12,'ROLE_CHILD','2022-11-18 15:55:37','2022-11-18 15:55:37','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2NjkzNTkzMzZ9.IK6-FQWIA_loMPUJT6Ym-1CIyFZJwvhe_ozyPTFyBu8'),(14,'ROLE_CHILD','2022-11-18 17:44:48','2022-11-18 17:44:48','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2NjkzNjU4ODd9.c7bYyqJ5c-oomXhXL8Ttik3RDncqe78xijghqEMRKoQ'),(16,'ROLE_CHILD','2022-11-20 20:09:30','2022-11-20 20:09:30','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk1NDczNjl9.7Yo1wdV164TjXw3HKDT3fMHSjQIqdMfLZpT7VmMEkYs'),(19,'ROLE_CHILD','2022-11-19 17:35:35','2022-11-19 17:35:35','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk0NTE3MzR9.0YVuSTLaA9feHZAyFc8kVv5BXrCvHFi3YmNbEL0Wkyk'),(21,'ROLE_CHILD','2022-11-20 20:45:23','2022-11-20 20:45:23','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJleHAiOjE2Njk1NDk1MjJ9.Il_MdGMqQVk3k3DjWJk6S8lxZ5rEALAgbdCakKYPIsA');
/*!40000 ALTER TABLE `refresh_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rewards`
--

DROP TABLE IF EXISTS `rewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rewards` (
  `reward_id` int NOT NULL AUTO_INCREMENT,
  `is_paid` bit(1) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `parent_nickname` varchar(25) DEFAULT NULL,
  `reward_condition` int NOT NULL,
  `child_id` int DEFAULT NULL,
  PRIMARY KEY (`reward_id`),
  KEY `FKfebyb7fc5ln71ps12r4eyd7wx` (`child_id`),
  CONSTRAINT `FKfebyb7fc5ln71ps12r4eyd7wx` FOREIGN KEY (`child_id`) REFERENCES `children` (`child_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rewards`
--

LOCK TABLES `rewards` WRITE;
/*!40000 ALTER TABLE `rewards` DISABLE KEYS */;
INSERT INTO `rewards` VALUES (4,_binary '\0','맥북프로','박경열',6,8),(9,_binary '\0','맥북 프로','박경열',7,19),(10,_binary '\0','맥북 프로','박경열',1,19);
/*!40000 ALTER TABLE `rewards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-20 20:53:48
