-- like: case sensitive pattern match
-- ilike: case insensitive pattern match
-- %: any number of characters


SELECT * FROM products
WHERE name LIKE 'Laptop%';

SELECT * FROM products
WHERE name ILIKE 'laptop%';

SELECT name, category, description
FROM products
WHERE name ILIKE '%laptop%' OR description ILIKE '%laptop%';