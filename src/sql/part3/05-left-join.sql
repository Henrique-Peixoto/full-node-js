-- LEFT JOIN keeps all rows from the left table
-- If the right table has matching data, PostgreSQL includes that
-- Otherwise, null is returned

-- posts -> left table
-- comments -> right table

-- Becasue not every post is going to have comments
SELECT 
  posts.title AS post_title,
  comments.body AS comment_body
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id
ORDER BY posts.title;

-- With LEFT JOIN, posts with no comments are going to be shown
-- With INNER JOIN, posts with no comments are going to be hidden