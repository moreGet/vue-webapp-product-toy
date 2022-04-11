-- 1
CREATE TABLE t_seller (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	phone VARCHAR(100) NOT NULL,
	created_date DATETIME NOT NULL DEFAULT NOW(),
	updated_date DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);

-- 2
CREATE TABLE t_category (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	category1 VARCHAR(100) NOT NULL,
	category2 VARCHAR(100) NOT NULL,
	category3 VARCHAR(100),
	created_date DATETIME NOT NULL DEFAULT NOW(),
	updated_date DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);

-- 3
CREATE TABLE t_product (
	id INTEGER UNSIGNED AUTO_INCREMENT,
	seller_id INTEGER UNSIGNED NOT NULL DEFAULT 0,
	category_id INTEGER UNSIGNED NOT NULL DEFAULT 0,
	product_name VARCHAR(200) NOT NULL,
	product_price INTEGER NOT NULL DEFAULT 0,
	delivery_price INTEGER NOT NULL DEFAULT 0,
	add_delivery_price INTEGER NOT NULL DEFAULT 0,
	tags VARCHAR(100),
	outbound_days INTEGER NOT NULL DEFAULT 5,
	created_date DATETIME NOT NULL DEFAULT NOW(),
	updated_date DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id),
	FOREIGN KEY (seller_id) REFERENCES t_seller(id),
	FOREIGN KEY (category_id) REFERENCES t_category(id)
);

-- 4
CREATE TABLE t_image (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	product_id INTEGER UNSIGNED,
	type INTEGER UNSIGNED NOT NULL COMMENT '1:썸네일, 2:제품이미지, 3:제품설명 이미지',
	path VARCHAR(150) NOT NULL,
	created_date DATETIME NOT NULL DEFAULT NOW(),
	updated_date DATETIME NOT NULL DEFAULT NOW(),
	FOREIGN KEY (product_id) REFERENCES t_product(id),
	PRIMARY KEY (id)
);

-- 5
CREATE TABLE t_user (
	email VARCHAR(50) NOT NULL,
	type INTEGER(10) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1:구매자, 2:판매자',
	created_date DATETIME NOT NULL DEFAULT NOW(),
	updated_date DATETIME NOT NULL DEFAULT NOW(),
-- 	FOREIGN KEY (email) REFERENCES t_seller(email),
	PRIMARY KEY (email)
);