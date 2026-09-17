-- null - unknown/missing val
-- empty string - known string value but it contains no characters
-- zero - actual numeric value of 0

DROP TABLE IF EXISTS basics.value_examples;

CREATE TABLE basics.value_examples (
  id SERIAL PRIMARY KEY,
  nickname TEXT,
  bio TEXT,
  score INTEGER
);

INSERT INTO basics.value_examples (nickname, bio, score)
VALUES 
  (null, 'learning PostgreSQL', 10),
  ('', 'my bio', 20),
  ('henrique', '', 0),
  ('henrique', null, null);

SELECT * 
FROM basics.value_examples
WHERE nickname IS NULL;