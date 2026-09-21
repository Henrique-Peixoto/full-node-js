-- One post can have many tags
-- One tag can be associated with many posts

-- posts.id === post_tags.post_id
-- tags.id === post_tags.tag_id

SELECT 
  posts.title AS post_title,
  tags.name AS tag_name
FROM posts
INNER JOIN post_tags ON posts.id = post_tags.post_id
INNER JOIN tags ON post_tags.tag_id = tags.id
ORDER BY posts.title, tags.name;