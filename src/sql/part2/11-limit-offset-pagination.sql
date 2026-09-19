-- LIMIT: how many rows to return
-- OFFSET: how many rows to skip

SELECT name, price
FROM products
ORDER BY price ASC
LIMIT 5;

SELECT name, price
FROM products
ORDER BY price ASC
LIMIT 5
OFFSET 5; -- skip the first 5 rows

-- Pagination
-- General rule: (page - 1) * offset
-- First page: (1 - 1) * 5 = 0 offset
-- Second page: (2 - 1) * 5 = 5 offset
-- Third page: (3 - 1) * 5 = 10 offset