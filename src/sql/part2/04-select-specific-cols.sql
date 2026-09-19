-- select *: returns every column
-- select specific cols

SELECT price
FROM products;

-- AS creates an alias for a column
SELECT
  name AS product_name,
  price AS selling_price,
  stock AS available_quantity
FROM products;