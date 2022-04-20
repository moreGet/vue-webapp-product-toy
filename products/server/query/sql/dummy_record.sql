-- DUMMY RECORD

-- SELECT
-- SELECT tp.*, tc.id as category_id_for
-- FROM t_category tc, t_product tp 
-- WHERE tc.id = tp.category_id
-- LIMIT 10;

-- SELECT *
-- FROM t_category tc 
-- JOIN t_product tp 
-- ON tc.id = tp.category_id 
-- WHERE 1=1
-- ORDER BY tc.id DESC
-- LIMIT 10

-- SELLER
INSERT INTO t_seller
(name, email, phone, created_date, updated_date)
VALUES('신성현', 'dkdlwmzhs@naver.com', '+821055241691', current_timestamp(), current_timestamp());

-- CATEGORY
INSERT INTO t_category
(category1, category2, category3, created_date, updated_date)
VALUES('전자제품', '냉장고', 'LG', current_timestamp(), current_timestamp());

-- PRODUCT
INSERT INTO t_product
(seller_id, category_id, product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, created_date, updated_date)
VALUES(1, 1, 'LG전자 오브제컬렉션 M872GBB251S2', 219000, 5000, 0, NULL, 5, current_timestamp(), current_timestamp());

-- IMAGE
INSERT INTO t_image
(product_id, `type`, `path`, created_date, updated_date)
VALUES(3, 1, 'http://img.danawa.com/prod_img/500000/862/322/img/15322862_1.jpg?shrink=330:330&_v=20220207143108', current_timestamp(), current_timestamp());

INSERT INTO t_image
(product_id, `type`, `path`, created_date, updated_date)
VALUES(4, 1, 'http://img.danawa.com/prod_img/500000/363/455/img/15455363_1.jpg?shrink=330:330&_v=20220323151141', current_timestamp(), current_timestamp());