-- One parent row can have many child rows
-- Example:
-- One user can write many posts (users: parent table)
-- But one post can only belong to one user (posts: child table)
-- posts.user_id -> users.id

-- Show all users with their respective posts
SELECT
  users.name AS author_name,
  posts.title AS post_title,
  posts.status
FROM users
INNER JOIN posts ON users.id = posts.user_id
ORDER BY users.name, posts.title;

