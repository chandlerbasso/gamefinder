DROP TABLE if EXISTS games;

CREATE TABLE games (
  game_id SERIAL unique PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(144) NOT NULL,
  article_link TEXT
)
