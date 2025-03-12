/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : 2024_znyg

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2024-04-19 21:22:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `attribute_table`
-- ----------------------------
DROP TABLE IF EXISTS `attribute_table`;
CREATE TABLE `attribute_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aname` varchar(200) DEFAULT NULL,
  `material` varchar(200) DEFAULT NULL,
  `color` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of attribute_table
-- ----------------------------
INSERT INTO `attribute_table` VALUES ('1', '春装', '啫喱质地', '粉色系列');
INSERT INTO `attribute_table` VALUES ('2', '夏妆', '液体质地', '无色');
INSERT INTO `attribute_table` VALUES ('3', '秋妆', '流动质地', '咖色系列');
INSERT INTO `attribute_table` VALUES ('5', '冬妆', '口红', '姨妈色系列');

-- ----------------------------
-- Table structure for `bs_rfid`
-- ----------------------------
DROP TABLE IF EXISTS `bs_rfid`;
CREATE TABLE `bs_rfid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rfid_id` varchar(255) DEFAULT NULL,
  `rfid_status` varchar(255) DEFAULT NULL COMMENT '0-未读 1-已读',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of bs_rfid
-- ----------------------------
INSERT INTO `bs_rfid` VALUES ('1', '332C8D35', '1');

-- ----------------------------
-- Table structure for `bs_token`
-- ----------------------------
DROP TABLE IF EXISTS `bs_token`;
CREATE TABLE `bs_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of bs_token
-- ----------------------------
INSERT INTO `bs_token` VALUES ('1', '1', 'bca68249-9b47-4168-b8b3-ac4a8fed3b80');
INSERT INTO `bs_token` VALUES ('6', '7', '199582e0-bafe-4490-8150-5be51fdca438');
INSERT INTO `bs_token` VALUES ('7', '10', 'a0ecf99e-247d-4ddd-b73c-217a2859d0d7');
INSERT INTO `bs_token` VALUES ('8', '11', 'd1df9a14-6389-40d4-9ac3-51e16f0d181b');

-- ----------------------------
-- Table structure for `bs_user`
-- ----------------------------
DROP TABLE IF EXISTS `bs_user`;
CREATE TABLE `bs_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL COMMENT ' 0-管理员 1-普通用户',
  `identity` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `book_count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of bs_user
-- ----------------------------
INSERT INTO `bs_user` VALUES ('1', 'admin', 'admin', '0', '22', '男', null, null, 'admin@163.com', null);
INSERT INTO `bs_user` VALUES ('7', 'zhangsan', 'admin2', '1', '22', '男', null, null, 'admin2@163.com', null);
INSERT INTO `bs_user` VALUES ('8', 'lisi', 'zhangsan1', '0', '22', '男', '', '', 'zhangsan@163.com', '0');
INSERT INTO `bs_user` VALUES ('10', 'lisia', 'lisia', '1', '1', '', '', '', '', '0');
INSERT INTO `bs_user` VALUES ('11', 'aaaaaa', 'aaaaaa', '1', '1', '', '', '', '', '0');

-- ----------------------------
-- Table structure for `clothing_category_table`
-- ----------------------------
DROP TABLE IF EXISTS `clothing_category_table`;
CREATE TABLE `clothing_category_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of clothing_category_table
-- ----------------------------
INSERT INTO `clothing_category_table` VALUES ('1', '腮红');
INSERT INTO `clothing_category_table` VALUES ('2', '眉系');
INSERT INTO `clothing_category_table` VALUES ('3', '粉底');
INSERT INTO `clothing_category_table` VALUES ('4', '口红');

-- ----------------------------
-- Table structure for `clothing_table`
-- ----------------------------
DROP TABLE IF EXISTS `clothing_table`;
CREATE TABLE `clothing_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200) DEFAULT NULL,
  `wardrobe_name` varchar(200) DEFAULT NULL,
  `attribute` varchar(200) DEFAULT NULL,
  `rfid` varchar(200) DEFAULT NULL,
  `cname` varchar(255) DEFAULT NULL,
  `cstatus` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of clothing_table
-- ----------------------------
INSERT INTO `clothing_table` VALUES ('21', '眉系', '帽子', '夏妆', '22', '333', '入库', 'https://scwtest20200706.oss-cn-beijing.aliyuncs.com/file_sharing/a1ca557a-c7b7-4b69-8251-fa5896934197-1713275538442.jpg');
INSERT INTO `clothing_table` VALUES ('22', '腮红', '腮红', '春装', '332C8D35', '11', '入库', 'https://scwtest20200706.oss-cn-beijing.aliyuncs.com/file_sharing/a1ca557a-c7b7-4b69-8251-fa5896934197-1713275538442.jpg');

-- ----------------------------
-- Table structure for `data_table`
-- ----------------------------
DROP TABLE IF EXISTS `data_table`;
CREATE TABLE `data_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `temperature` varchar(200) DEFAULT NULL,
  `humidity` varchar(200) DEFAULT NULL,
  `ctime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of data_table
-- ----------------------------
INSERT INTO `data_table` VALUES ('1', '35.7', '19.6', '2024-04-12 16:54:14');
INSERT INTO `data_table` VALUES ('2', '28.50', '63.00', '2024-04-12 22:32:22');
INSERT INTO `data_table` VALUES ('3', '28.50', '62.00', '2024-04-12 22:33:02');
INSERT INTO `data_table` VALUES ('4', '28.50', '62.00', '2024-04-12 22:33:11');
INSERT INTO `data_table` VALUES ('5', '28.50', '63.00', '2024-04-12 22:33:19');
INSERT INTO `data_table` VALUES ('6', '28.50', '62.00', '2024-04-12 22:33:27');
INSERT INTO `data_table` VALUES ('7', '28.50', '62.00', '2024-04-12 22:33:35');
INSERT INTO `data_table` VALUES ('8', '28.50', '62.00', '2024-04-12 22:33:43');
INSERT INTO `data_table` VALUES ('9', '28.90', '72.00', '2024-04-12 22:33:51');
INSERT INTO `data_table` VALUES ('10', '29.80', '77.00', '2024-04-12 22:33:59');
INSERT INTO `data_table` VALUES ('11', '30.80', '78.00', '2024-04-12 22:34:07');
INSERT INTO `data_table` VALUES ('12', '31.80', '87.00', '2024-04-12 22:34:15');
INSERT INTO `data_table` VALUES ('13', '33.30', '88.00', '2024-04-12 22:34:23');
INSERT INTO `data_table` VALUES ('14', '34.20', '81.00', '2024-04-12 22:34:31');
INSERT INTO `data_table` VALUES ('15', '34.20', '70.00', '2024-04-12 22:34:39');
INSERT INTO `data_table` VALUES ('16', '34.20', '61.00', '2024-04-12 22:34:47');
INSERT INTO `data_table` VALUES ('17', '34.00', '56.00', '2024-04-12 22:34:55');
INSERT INTO `data_table` VALUES ('18', '33.80', '53.00', '2024-04-12 22:35:03');
INSERT INTO `data_table` VALUES ('19', '33.50', '52.00', '2024-04-12 22:35:11');
INSERT INTO `data_table` VALUES ('20', '32.30', '52.00', '2024-04-12 22:35:38');
INSERT INTO `data_table` VALUES ('21', '32.30', '52.00', '2024-04-12 22:35:47');
INSERT INTO `data_table` VALUES ('22', '31.80', '52.00', '2024-04-12 22:35:55');
INSERT INTO `data_table` VALUES ('23', '31.80', '52.00', '2024-04-12 22:36:03');
INSERT INTO `data_table` VALUES ('24', '31.80', '53.00', '2024-04-12 22:36:11');
INSERT INTO `data_table` VALUES ('25', '31.30', '53.00', '2024-04-12 22:36:19');
INSERT INTO `data_table` VALUES ('26', '31.30', '53.00', '2024-04-12 22:36:27');
INSERT INTO `data_table` VALUES ('27', '31.30', '57.00', '2024-04-12 22:36:35');
INSERT INTO `data_table` VALUES ('28', '31.80', '68.00', '2024-04-12 22:36:43');
INSERT INTO `data_table` VALUES ('29', '32.90', '75.00', '2024-04-12 22:36:51');
INSERT INTO `data_table` VALUES ('31', '0.00', '0.00', '2024-04-12 22:55:14');
INSERT INTO `data_table` VALUES ('32', '0.00', '0.00', '2024-04-12 22:55:22');
INSERT INTO `data_table` VALUES ('33', '24.50', '81.00', '2024-04-12 22:55:44');
INSERT INTO `data_table` VALUES ('34', '24.50', '80.00', '2024-04-12 22:55:52');
INSERT INTO `data_table` VALUES ('35', '24.80', '80.00', '2024-04-12 22:56:00');
INSERT INTO `data_table` VALUES ('36', '24.80', '80.00', '2024-04-12 22:56:08');
INSERT INTO `data_table` VALUES ('37', '24.80', '79.00', '2024-04-12 22:56:16');
INSERT INTO `data_table` VALUES ('38', '25.30', '78.00', '2024-04-12 22:56:24');
INSERT INTO `data_table` VALUES ('39', '25.30', '77.00', '2024-04-12 22:56:32');
INSERT INTO `data_table` VALUES ('40', '25.30', '77.00', '2024-04-12 22:56:40');
INSERT INTO `data_table` VALUES ('41', '25.30', '76.00', '2024-04-12 22:56:48');
INSERT INTO `data_table` VALUES ('42', '25.30', '76.00', '2024-04-12 22:56:56');
INSERT INTO `data_table` VALUES ('43', '25.30', '75.00', '2024-04-12 22:57:04');

-- ----------------------------
-- Table structure for `wardrobe_category_table`
-- ----------------------------
DROP TABLE IF EXISTS `wardrobe_category_table`;
CREATE TABLE `wardrobe_category_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of wardrobe_category_table
-- ----------------------------
INSERT INTO `wardrobe_category_table` VALUES ('1', '眉粉');
INSERT INTO `wardrobe_category_table` VALUES ('2', '腮红');
INSERT INTO `wardrobe_category_table` VALUES ('3', '粉底');
INSERT INTO `wardrobe_category_table` VALUES ('4', '口红');

-- ----------------------------
-- Table structure for `wardrobe_table`
-- ----------------------------
DROP TABLE IF EXISTS `wardrobe_table`;
CREATE TABLE `wardrobe_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200) DEFAULT NULL,
  `quantity` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of wardrobe_table
-- ----------------------------
INSERT INTO `wardrobe_table` VALUES ('1', '口红', '4');
INSERT INTO `wardrobe_table` VALUES ('2', '粉底', '4');
INSERT INTO `wardrobe_table` VALUES ('3', '腮红', '4');
INSERT INTO `wardrobe_table` VALUES ('4', '眉粉', '3');
