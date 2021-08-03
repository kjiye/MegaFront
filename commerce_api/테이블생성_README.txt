타입 관리 테이블

CREATE TABLE `mega_prod_type` (
  `type_idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type_name` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`type_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;


상품 테이블

CREATE TABLE `mega_prod` (
  `prod_idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `prod_type_idx` int(11) NOT NULL,
  `prod_name` varchar(200) NOT NULL DEFAULT '',
  `prod_brand` varchar(50) NOT NULL DEFAULT '',
  `prod_img_url` varchar(300) NOT NULL DEFAULT '',
  `prod_price` int(11) NOT NULL,
  `prod_usage` text NOT NULL,
  `prod_feature` text NOT NULL,
  PRIMARY KEY (`prod_idx`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
