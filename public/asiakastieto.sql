DROP DATABASE IF EXISTS asiakastieto;
CREATE DATABASE asiakastieto;
USE asiakastieto;

CREATE TABLE asiakas (
	name VARCHAR(50),	
	address VARCHAR(50),
	phone VARCHAR(50),
	email VARCHAR(50),
	idnumber VARCHAR(50)
)ENGINE=INNODB; 


INSERT INTO asiakas (name, address, phone, email, idnumber) VALUES
('Seppo Taalasmaa', 'Tasavallankatu 100, 80100 Joensuu', '050-1351156136', 'seppo@taalasmaa.fi', '130355-1256'),
('Ulla Taalasmaa', 'Kauppakatu 100, 80100 Joensuu', '050-163482417', 'ulla@taalasmaa.fi', '310155-1443'),
('Raineri Kosonen', 'Kauppakatu 43, 80100 Joensuu', '040-5282582427', 'raineri@kosonen.fi', '120466-7472'),
('Kyösti Piiroinen', 'Tasavallankatu 80, 80100 Joensuu', '040-147171143', 'kyosti@piiroinen.fi', '140544-3717'),
('Leena Lahtinen', 'Kauppakatu 12, 80100 Joensuu', '040-42824824821', 'leena@lahtinen.fi', '150254-2462'),
('Reijo Ruotsalainen', 'Raatekankaantie 100, 80100 Joensuu', '040-1346136113', 'reijo@ruotsalainen.fi', '171267-1361'),
