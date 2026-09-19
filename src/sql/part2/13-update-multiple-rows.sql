UPDATE products
SET price = ROUND(price * 1.10, 2)
WHERE category = 'stationery';

UPDATE products
SET is_active = FALSE
WHERE stock = 0;