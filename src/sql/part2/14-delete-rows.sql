INSERT INTO products (name, category, price, stock, sku, description)
VALUES ('temp product to be deleted', 'electronics', 245.23, 45, 'ELEC-TEL-001', 'description');

SELECT FROM products
WHERE sku = 'ELEC-TEL-001';

DELETE FROM products
WHERE sku = 'ELEC-TEL-001';

SELECT FROM products
WHERE sku = 'ELEC-TEL-001';