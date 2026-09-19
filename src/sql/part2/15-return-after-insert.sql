-- Affected rows are returned after insert, update and delete operations

INSERT INTO products (name, category, price, stock, sku, description)
VALUES ('webcam', 'electronics', 23.23, 56, 'ELEC-WEB-001', 'description')
RETURNING id, name, category, price, stock, sku, description;

UPDATE products
SET stock = stock + 11
WHERE sku = 'ELEC-WEB-001'
RETURNING id, name, stock;

DELETE FROM products
WHERE sku = 'ELEC-WEB-001'
RETURNING id, name, sku;