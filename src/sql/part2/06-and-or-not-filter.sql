SELECT * FROM products
WHERE category = 'electronics' AND price > 1000;

SELECT * FROM products
WHERE category = 'electronics' OR category = 'furniture';

SELECT * FROM products
WHERE NOT category = 'furniture';

SELECT * FROM products
WHERE (category = 'electronics' OR category = 'furniture') AND stock > 0;

SELECT * FROM products
WHERE is_active = TRUE AND (price < 100 OR stock >= 100);