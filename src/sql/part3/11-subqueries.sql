-- One query inside another
-- Runs the inner query first and the outer query later

-- Which post are performing better than average

SELECT
  title,
  status,
  views
FROM posts
WHERE views > (
  SELECT AVG(views)
  FROM posts
)
ORDER BY views DESC;