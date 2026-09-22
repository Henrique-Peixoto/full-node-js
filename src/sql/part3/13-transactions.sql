-- Multiple SQL statements executed as one safe unit

-- Example:
-- User places an order;
-- You have to reduce the stock of that product
-- Create a payment record
-- Transfer money

BEGIN;

UPDATE posts
SET status = 'published'
WHERE title = 'Indexes for beginners' AND status = 'draft';

UPDATE posts
SET views = views + 50
WHERE title = 'Indexes for beginners';

SELECT
  title,
  status,
  views
FROM posts
WHERE title = 'Indexes for beginners';

COMMIT;