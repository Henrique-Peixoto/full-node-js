-- null: missing value
-- Don't do "= null", but rather IS NULL or IS NOT NULL

SELECT name, description
FROM products
WHERE description IS NULL;

SELECT name, description
FROM products
WHERE description IS NOT NULL;

SELECT name, category, is_active, description
FROM products
WHERE is_active = TRUE AND description IS NULL;