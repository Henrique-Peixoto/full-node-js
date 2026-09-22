-- Helps to reduce the searching time

SELECT
  id,
  title,
  status
FROM posts
WHERE status = 'published'
ORDER BY views DESC;

CREATE INDEX IF NOT EXISTS idx_posts_status
ON posts(status);

-- Composite index
CREATE INDEX IF NOT EXISTS idx_posts_status_views
ON posts(status, views DESC);

SELECT 
  views
FROM posts
WHERE user_id = (
  SELECT id
  FROM users
  WHERE name = 'rahul'
);

CREATE INDEX IF NOT EXISTS idx_posts_user_id
ON posts(user_id);