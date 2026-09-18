-- NOT NULL, UNIQUE, DEFAULT, CHECK
-- app, script, developer

DROP TABLE IF EXISTS basics.accounts;

CREATE TABLE basics.accounts (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email VARCHAR(100) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  age INTEGER CHECK (age >= 18),
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO basics.accounts (full_name, email, age)
VALUES ('Henrique Peixoto', 'henrique@email', 26);

