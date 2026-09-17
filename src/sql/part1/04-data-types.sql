DROP TABLE IF EXISTS basics.products_basic;

CREATE TABLE basics.products_basic (
  id SERIAL PRIMARY KEY,
  -- string: max length of x chars
  name VARCHAR(100) NOT NULL,
  description TEXT,
  stock INTEGER DEFAULT 0,
  -- Stores larger whole numbers than INTEGER
  total_views BIGINT DEFAULT 0,
  -- Exact decimal values
  -- 10 total digits on the integer part
  -- 2 total digits on the decimal part
  price NUMERIC(10,2),
  is_active BOOLEAN DEFAULT true
);

INSERT INTO basics.products_basic 
  (name, description, stock, total_views, price, is_active)
VALUES  
  ('product 1', 'product desc', 100, 1200, 2455.65, true);

SELECT id, name, price, is_active
FROM basics.products_basic
WHERE is_active;