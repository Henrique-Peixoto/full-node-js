-- Foreign keys are columns that point to the primary key of another table

-- Example
-- users.id: primary key
-- posts.user_id: foreign key
-- Meaning: every post must belong to an existing user

SELECT id, name
FROM users;

SELECT id, user_id, title
FROM posts;